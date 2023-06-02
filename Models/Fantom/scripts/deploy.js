const hre = require("hardhat");

async function main() {
    const FNFTContract = await hre.ethers.getContractFactory("FNFTGenerator");
    const fnftContract = await FNFTContract.deploy();
    await fnftContract.deployed();
    
    console.log("F-NFT Contract deployed to:", fnftContract.address);
    
    const ERC1155Contract = await hre.ethers.getContractFactory("SFTix");
    const erc1155Contract = await ERC1155Contract.deploy();
    await erc1155Contract.deployed();
    
    console.log("SFT Contract deployed to:", erc1155Contract.address);

    const ERC721 = await ethers.getContractFactory("MyERC721");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();

    console.log("ERC721 contract address: ", erc721.address);
}

main()
    .then(() => process.exit())
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

