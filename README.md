# Assessment Smart Contract and Frontend

A simple Ethereum-based smart contract for managing deposits and withdrawals, connected to a frontend application.

## Description

This project includes an Ethereum smart contract written in Solidity that allows users to deposit and withdraw funds. The contract maintains a balance and is owned by the contract creator. The frontend application, built with React and Ethers.js, provides a user interface for interacting with the smart contract. Users can connect their MetaMask wallet, view their balance, and perform deposit and withdrawal operations.

## Getting Started

### Installing

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/assessment-dapp.git
   cd assessment-dapp
   ```
2. Install dependencies:
   run the command - npm install
3. Configure the smart contract:

- Ensure you have a deploymentInfo.json file in the artifacts directory containing your contract's deployment address.
- Example deploymentInfo.json:
  {
  "address": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  "deployer": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  }

## Executing program

1. Compile and deploy the smart contract:
   - You can use tools like Remix IDE, Hardhat, or Truffle to deploy the contract. For example, using Hardhat:
     npx hardhat compile
     npx hardhat run scripts/deploy.js --network <network_name>
2. Run the frontend application:
   run with command - npm run dev
3. Interact with the contract through the frontend:
   - Open your browser and navigate to http://localhost:3000.
   - Connect your MetaMask wallet.
   - Use the interface to deposit and withdraw funds.

## Help

### Common Issues

- MetaMask not installed:
  - Ensure MetaMask is installed and enabled in your browser.
- Contract not deployed:
  - Verify the contract address in deploymentInfo.json matches the deployed contract address.
- Insufficient funds for gas:
  - Ensure your MetaMask wallet has enough ETH to cover transaction fees.

## Commands

- To compile the contract:
  use the command - npx hardhat compile
- To deploy the contract:
  use the command - npx hardhat run scripts/deploy.js --network <network_name>
- To start the frontend application:
  use the command - npm run dev

## Authors

Sikiru Yaya (Skycode)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

### Explanation:

- **Project Title**: Set as "Assessment Smart Contract and Frontend".
- **Description**: Provides a detailed overview of the project's purpose and functionality.
- **Getting Started**:
  - **Installing**: Instructions to clone the repository, install dependencies, and configure the contract.
  - **Executing program**: Steps to compile and deploy the smart contract and run the frontend application.
- **Help**: Addresses common issues users might face and provides commands for common tasks.
- **Authors**: Lists Sikiru Yaya (Skycode) with a Twitter handle.
- **License**: Mentions that the project is licensed under the MIT License.

Feel free to adjust the details and commands according to your actual project setup and deployment process.
