const { ethers, JsonRpcProvider } = require('ethers')
const fs = require("fs-extra");

async function main() {
  //compile them in our code
  //compile them seperatly
  //http://127.0.0.1:7545
  const provider = new JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  // Through this provider we can interact with the blockchain
  const wallet = new ethers.Wallet(
    "0xe1a36e9eaf858414f94c50e63df5683d0dfa1ba20ed67c312d4b26c688d65ac0",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const ContractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Deploying contract...");

  const contarct = await ContractFactory.deploy(); //Stop here and wait for the contract to deploy

  console.log(contarct);

  try {
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
