import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import contractInfo from "../deploymentInfo.json";


export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = contractInfo.address;
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // Once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async () => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  };

  const deposit = async () => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait();
      getBalance();
    }
  };

  const withdraw = async () => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait();
      getBalance();
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p className="btn-txt">Please install Metamask in order to use this ATM.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount} style={{color: "#fff", marginLeft: 550, backgroundColor: "#00a5f0", width: 150, borderRadius: 4, height: 60, textAlign: "center"}}>
        Please connect your Metamask wallet
        </button>;
    }

    if (balance === undefined) {
      getBalance();
    }

    return (
      <div>
        <style jsx>
          {
            `
          .btn-txt {
            color: #fff;
            width: 20%;
            height: 60px;
            margin-left: 20px;
            padding: 10px;
            border-radius: 4px;
            background-color: 
          }
          .dept {
            background-color: #7fb801;
          }
          .withd {
            background-color: #f05023;
          }
          
          .message {
          color: purple;
          }
            `
          }
        </style>
        <p className="message">Your Account: {account}</p>
        <p className="message">Your Balance: {balance}</p>
        <button onClick={deposit} className="btn-txt dept">Deposit 1 ETH</button>
        <button onClick={withdraw} className="btn-txt withd">Withdraw 1 ETH</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header><h1 id="welcome-text">Welcome to the Metacrafters ATM!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          font-family: sans-serif;
          background-color: orange;
          text-align: center;
          padding-block: 20px;
          height: 100vh;
          
        }
        #welcome-text {
          font-style: italic;
          color: blue;
        }
      `}
      </style>
    </main>
  );
}



