require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    fantom: {
      url: `https://rpc.testnet.fantom.network`,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.10",
  },
};

