const hre = require("hardhat");


async function main()
{
    // Get the contract factory
    const EventTickets = await hre.ethers.getContractFactory("EventTickets");

    // Deploy the contract
    const eventTickets = await EventTickets.deploy();

    // Wait for the contract to be deployed
    await eventTickets.deployed();

    // Print the contract address
    console.log("EventTickets contract deployed to:", eventTickets.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) =>
    {
        console.error(error);
        process.exit(1);
    });
