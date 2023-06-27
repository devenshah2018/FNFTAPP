require("@nomicfoundation/hardhat-toolbox"); 
require("dotenv").config();


const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    mainnet: {
      url: `https://rpc.ankr.com/fantom/6acfc6a71c6ee93f5f3fe7efbc0c378b7b5c8129a51030f9047b273ea6eef79c`,
      chainId: 250,
      accounts: ['0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'],
    },
  },
  coverage: { 
    url: 'http://localhost:8555'
  },
  solidity: {
    version: "0.8.10",
  },
};

