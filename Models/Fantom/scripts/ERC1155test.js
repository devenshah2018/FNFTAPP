const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");
//const abiDefinition = require('./ERC1155.abi.json');


async function testERC20FractionalNFT() {
    const contractArtifact = await hre.artifacts.readArtifact("SFTix");
    const contractABI = contractArtifact.abi;

    console.log(contractABI);

    // const TICKET_PRICE = ethers.utils.parseEther("0.1");
    // const TOKEN_ID = 1;

    // Deploy the ERC1155 contract
    const erc1155Contract = await ethers.getContractFactory("SFTix");
    const deployERC1155Contract = await erc1155Contract.deploy();
    await deployERC1155Contract.deployed();

    console.log("ERC1155 Contract owner @ ", deployERC1155Contract.address);

    const balance = await ethers.provider.getBalance(deployERC1155Contract);

    //setTokenPrices 
    const _GAPrice = 10;
    const _VIPPrice = 100;

    //setSupply
    const _GASupply = 1000;
    const _VIPSupply = 100;


    //Connect setTokenPrices.sol function
    await deployERC1155Contract.setTokenPrices(_GAPrice, _VIPPrice, _GASupply, _VIPSupply);
    //
    // Print Ticket Price and Supply
    console.log("GA Ticket price $", _GAPrice, "VIP Ticket Price $", _VIPPrice);

    console.log("GA Supply: ", _GASupply, "VIP Supply: ", _VIPSupply);

    //Connect buyTicket.sol + transferTicket function
    const _testRequestedTicket = 1;
    // const _ticketPrice = 100;

    // const signer  = await ethers.getSigners();
    const buyTicket = await deployERC1155Contract.mint(deployERC1155Contract.address, _testRequestedTicket, 12, "");

    const transferTicket = await deployERC1155Contract.transferToken(deployERC1155Contract.address, deployERC1155Contract.address, _testRequestedTicket, 10);

    console.log("Purchased ticket: ", buyTicket, transferTicket);

    //GetAccountBalance
    return ethers.utils.formatEther(balance);

}





(async () => {
    try {
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        await testERC20FractionalNFT(contractAddress);
        console.log("Test passed!");
    } catch (error) {
        console.error(error);
    }
})();

