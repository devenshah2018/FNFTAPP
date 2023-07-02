require("@nomicfoundation/hardhat-toolbox"); 
require("dotenv").config();


// const INFURA_API_KEY = process.env.INFURA_API_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    fantom: {

      // Quicknode Fantom mainnet endpoint
      url: `https://polished-billowing-star.fantom.discover.quiknode.pro/649d2397b901115a41e87c0855f0dee31ac447d4/`,
      
      chainId: 250,

      accounts: ['Enter Wallet PK '],
    },
  },
  coverage: { 
    url: 'http://localhost:8555'
  },
  solidity: {
    version: "0.8.10",
  },
};

