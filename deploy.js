const { ethers, JsonRpcProvider } = require('ethers')
const fs = require("fs-extra");

/**
 * Deploys a contract to the blockchain.
 * @returns {Promise<void>} A promise that resolves when the contract is deployed.
 */

async function main() {
  //compile them in our code
  //compile them seperatly
  //http://127.0.0.1:7545
  
  // Create a provider to connect to the blockchain
  const provider = new JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  // Create a wallet to interact with the blockchain
  const wallet = new ethers.Wallet(
    "0xe1a36e9eaf858414f94c50e63df5683d0dfa1ba20ed67c312d4b26c688d65ac0",
    provider
  );

  // Read the contract's ABI (Application Binary Interface) from a file
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");

  // Read the contract's binary code from a file
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  // Create a ContractFactory using the ABI, binary code, and wallet
  const ContractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Deploying contract...");

  // Deploy the contract to the blockchain
  const contract = await ContractFactory.deploy(); // Stop here and wait for the contract to deploy

  console.log(contract);

  try {
    // Additional code to interact with the deployed contract can be added here
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Call the main function to start the deployment process
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });