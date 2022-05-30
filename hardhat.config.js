require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const RPC_URL = process.env.RPC_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

// gasPrice: 50000000000 // 50 GWEI
// gasPrice: 1000000000000 // 1000 GWEI
// gasPrice: 10000000000000 // 10000 GWEI
// gasPrice: 20000000000000 // 20000 GWEI
module.exports = {
  solidity: "0.5.16",
  networks: {
    matic: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY],
    },
    ftm: {
      url: "https://rpcapi.fantom.network/",
      url: RPC_URL,
      gasPrice: 1000000000000,
      accounts: [PRIVATE_KEY],
    },
  },
};