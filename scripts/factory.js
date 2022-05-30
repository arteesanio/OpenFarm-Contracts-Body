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

  return

  // const CONTRACT_factory = await ethers.getContractFactory("UniswapV2Factory");
  // const deployedFactory = await CONTRACT_factory.deploy(user0);
  // await deployedFactory.deployed();
  // console.log("Factory Address:", deployedFactory.address);
  // let init_hash = await deployedFactory.INIT_CODE_PAIR_HASH()
  // console.log("init_hash:", init_hash);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
