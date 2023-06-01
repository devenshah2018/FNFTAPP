const { ethers } = require("hardhat");
const hre = require("hardhat"); 

async function main() {
    // Deploy the FNFTGenerator contract
    // const fTFactory = await ethers.getContractFactory("FNFTGenerator");
    const FNFTGenerator = await ethers.getContractFactory("FNFTGenerator");

    const fnftGenerator = await FNFTGenerator.deploy();
    
    const myNFT = await ethers.getContractFactory("ERC721");
    const MyNFT = await myNFT.deploy("ERC721", "ERC721");
    await MyNFT.deployed("ERC721", "ERC721");
    await fnftGenerator.deployed("FNFTGenerator", "OFT");

    // Log the contract address
    console.log("FNFTGenerator deployed to:", fnftGenerator.address);

    // Test the contract functionalities
    const ownerAddress = await fnftGenerator.owner();
    console.log("Owner address:", ownerAddress);

    // Collect OG NFT 
    fnftGenerator.setCollectOGNFT(MyNFT.address);

    // List for sale
    await fnftGenerator.listForSale(1);
    const salePrice = await fnftGenerator.salePrice();
    console.log("Sale price:", salePrice.toString());

    // Purchase
    const purchaseTx = await fnftGenerator.purchase({ value: salePrice });
    await purchaseTx.wait();
    console.log("Purchase transaction hash:", purchaseTx.hash);

    // Redeem
    const redeemTx = await fnftGenerator.redeem(1);
    await redeemTx.wait();
    console.log("Redeem transaction hash:", redeemTx.hash);
    }

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
    });
