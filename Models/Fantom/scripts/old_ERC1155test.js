// const { expect } = require("chai");
// const { ethers } = require("hardhat");
// const hre = require("hardhat"); 

// async function testERC20FractionalNFT() {


//     const TICKET_PRICE = ethers.utils.parseEther("0.1");
//     const TOKEN_ID = 1;

// // Deploy the ERC1155 contract
//     const erc1155Contract = await ethers.getContractFactory("SFTix");
//     const deployERC1155Contract = await erc1155Contract.deploy();
//     await deployERC1155Contract.deployed();

//     console.log("ERC1155 Contract owner @ ", deployERC1155Contract.address);

// //setTicketPrice 
//     const GATicketPrice = 10; 
//     const VIPTicketPrice = 100;
//     const RSVPTicketPrice = 1000;
// //setSupply
//     const GASupply = 1000;
//     const VIPSupply = 100;
//     const RSVPSupply = 10;

// //Connect setTicketPrice.sol function
//     await deployERC1155Contract.setTicketPrice(GATicketPrice, VIPTicketPrice, RSVPTicketPrice);
// //Connect setSupply.sol function
//     await deployERC1155Contract.setSupply(GASupply, VIPSupply, RSVPSupply);
// // Print Ticket Price and Supply
//     console.log("GA Ticket price $", GATicketPrice, "VIP Ticket Price $", VIPTicketPrice, "RSVP Ticket Price $", RSVPTicketPrice);

//     console.log("GA Supply: ", GASupply, "VIP Supply: ", VIPSupply, "RSVP Supply: ", RSVPSupply);

// //Connect buyTicket.sol function
//     const _randomTokenID = 1;
//     // const _ticketPrice = 100;
//     await deployERC1155Contract.buyTicket(_randomTokenID); 
//     console.log("Purchased ticket: ", )

// }

// (async () => {
//     try {
//     await testERC20FractionalNFT();
//     console.log("Test passed!");
//     } catch (error) {
//     console.error(error);
//     }
// })();