const { ethers } = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedjsonkey = await wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD);
  fs.writeFileSync("./encrypted.json", encryptedjsonkey);

  try {
    // Additional code to interact with the deployed contract can be added here
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