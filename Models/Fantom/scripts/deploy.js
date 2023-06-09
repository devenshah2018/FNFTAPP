const hre = require("hardhat");

async function main() {

    const ERC1155Contract = await hre.ethers.getContractFactory("SFTix");
    const erc1155Contract = await ERC1155Contract.deploy();
    await erc1155Contract.deployed();

    console.log("ERC1155 Contract deployed to:", erc1155Contract.address);
}
main()
    .then(() => process.exit())
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

