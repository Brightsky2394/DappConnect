const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const initBalance = 1;

  // Get the list of accounts
  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0];

  // Get the contract factory
  const Assessment = await hre.ethers.getContractFactory("Assessment", deployer);

  // Deploy the contract with the initial balance
  const assessment = await Assessment.deploy(initBalance);
  await assessment.deployed();

  console.log(`A contract with balance of ${initBalance} eth deployed to ${assessment.address} by account ${deployer.address}`);

  // Write the contract address to a file
  const contractInfo = {
    address: assessment.address,
    deployer: deployer.address
  };

  fs.writeFileSync("deploymentInfo.json", JSON.stringify(contractInfo, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
