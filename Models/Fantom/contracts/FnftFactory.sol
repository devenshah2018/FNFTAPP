// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract FNFTGenerator is ERC20, Ownable, ERC20Permit, ERC721Holder {
    constructor() ERC20("Ownable event F-token", "OFT") ERC20Permit("FNFTGenerator"){}

    address internal collectOGNFT; 
    uint256 public ticketTokenID;
    uint256 public salePrice; 

    bool public initialized = false; 
    bool public canRedeem = false; 
    bool public forSale = false; 

    function setCollectOGNFT(address tokenAddress) public onlyOwner {
        collectOGNFT = tokenAddress;
    }

    function listForSale(uint256 price) public onlyOwner {
        salePrice = price;
        forSale = true;
    }

    function purchase() public payable {
        require(forSale, "Tickets not yet for sale.");
        require(msg.value >= salePrice);

        IERC721(collectOGNFT).safeTransferFrom(address(this), msg.sender, ticketTokenID);
        forSale = false; 
        canRedeem = true;
    }

    function redeem(uint256 _amount) public {
        require(canRedeem);
        uint256 totalEth = address(this).balance;
        uint256 toRedeem = _amount * totalEth / totalSupply(); 
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(toRedeem);
    }

}

