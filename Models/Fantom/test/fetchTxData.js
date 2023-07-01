const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractFactory("EventTickets");
    const deployedContract = await contract.deploy();
    await deployedContract.deployed();

    const address = deployedContract.address;
    const transactionHash = deployedContract.deployTransaction.hash;

    // Validate the deployment
    const receipt = await deployedContract.deployTransaction.wait();
    const blockNumber = receipt.blockNumber;
// ----------------------------------------------------------------------
    // Temporary
    const [owner] = await ethers.getSigners();
    const ownerBalance = await deployedContract.balanceOf(owner.address, 0);

    console.log("Contract deployed to address:", address);
    console.log("Transaction hash:", transactionHash);
    console.log("Block number:", blockNumber);
    console.log(ownerBalance);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
