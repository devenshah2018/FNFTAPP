const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat"); 

async function testERC20FractionalNFT() {


    const TICKET_PRICE = ethers.utils.parseEther("0.1");
    const TOKEN_ID = 1;

// Deploy the ERC1155 contract
    const erc1155Contract = await ethers.getContractFactory("SFTix");
    const deployERC1155Contract = await erc1155Contract.deploy();
    await deployERC1155Contract.deployed();

    console.log("ERC1155 Contract owner @ ", deployERC1155Contract.address);

// Get balance of deployer address 




    const balanceOf = await contract.balanceOf("0x0");
    console.log("balanceOf: ", balanceOf);


//setTicketPrice 
    const GATicketPrice = 10; 
    const VIPTicketPrice = 100;
    const RSVPTicketPrice = 1000;
//setSupply
    const GASupply = 1000;
    const VIPSupply = 100;
    const RSVPSupply = 10;

// Connect to ERC1155.sol mint function
    
}

(async () => {
    try {
    await testERC20FractionalNFT();
    console.log("Test passed!");
    } catch (error) {
    console.error(error);
    }
})();