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

      accounts: ['c77af31768a1a656eeebaa770af5f61d9632dfa54f6439fc08f9ad534aa9d942'],
    },
  },
  coverage: { 
    url: 'http://localhost:8555'
  },
  solidity: {
    version: "0.8.10",
  },
};

