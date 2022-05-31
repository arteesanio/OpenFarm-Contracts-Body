const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata
  // const metadataURL = "ipfs://.../";

  let signers = await ethers.getSigners()
  let user0 = signers[0].address
  const provider = waffle.provider;
  
  const user0balanceETH = await provider.getBalance(user0);
  console.log(user0, ethers.utils.formatEther(user0balanceETH))

  // return

  const _cash = "0x2E138eD775CfAdD1823BD110D3369eC010eF434B"
  const _bond = "0x29819f28686bd416Df02A0d3343f065983a2b20f"

  const CONTRACT_object = await ethers.getContractFactory("TheOpenFarmPrinter");
  const deployedContract = await CONTRACT_object.deploy(_cash, _bond);
  await deployedContract.deployed();
  console.log("Contract: Farm Printer | Address:", deployedContract.address);
  // let init_hash = await deployedContract.INIT_CODE_PAIR_HASH()
  // console.log("init_hash:", init_hash);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
