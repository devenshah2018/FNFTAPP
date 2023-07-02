require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
    networks: {
/*        mainnet: {
            url: `https://rpc.ankr.com/fantom/6acfc6a71c6ee93f5f3fe7efbc0c378b7b5c8129a51030f9047b273ea6eef79c`,
            chainId: 250,
            accounts: ['ENTER PRIVATE KEY'],
        },*/
        fantom: {
            url: `https://rpc.ankr.com/fantom_testnet`,


            accounts: ['ENTER PRIVATE KEY'],
        },
    },
    coverage: {
        url: 'http://localhost:8555'
    },
    solidity: {
        version: "0.8.10",
    },
};