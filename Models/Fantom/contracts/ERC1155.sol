// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract SFTix is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    // At contract constructor accept 2 tokens price and supply

    // The constructor for the contract
    constructor() ERC1155("SFTix") {}
    
    uint256 public constant GA_TOKEN_ID = 1;
    uint256 public constant VIP_TOKEN_ID = 2;

    uint256 public _GAPrice;
    uint256 public _VIPPrice;

    uint256 public _GASupply;
    uint256 public _VIPSupply;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId, uint256 amount);



    function _setTokenPrices(uint256[] memory _GATickets, uint256[] memory _VIPTickets) public view {
        _GATickets[0] = _GAPrice; 
        _GATickets[1] = _GASupply; 

        _VIPTickets[0] = _VIPPrice;
        _VIPTickets[1] = _VIPSupply;

    }

    //to == ticket requester
    //tokenId == GA or VIP
    //amount == # of tickets
    //data == any additional messages/data

    function mint(address to, uint256 tokenId, uint256 amount, string memory data) public payable onlyOwner{
        require(msg.value >= _GAPrice);
        to = msg.sender;
        //Check if msg.value is >= _GAPrice 
        if(tokenId == GA_TOKEN_ID) {
            mint(to, tokenId, amount, data);
        } else {
            if(tokenId == VIP_TOKEN_ID) {
                mint(to, tokenId, amount, data);
            }
        }
        //Check if msg.value == _VIPPrice 
        
        
    }

    function transferToken(address from, address to, uint256 tokenId, uint256 amount) external {
        // to = { receiver wallet address}
        from = msg.sender;
        to = msg.sender; 
        // Check if the caller has sufficient balance
        require(balanceOf(from, tokenId) >= amount, "Insufficient balance");

        // Transfer the tokens from 'from' to 'to'
        safeTransferFrom(from, to, tokenId, amount, "");

        // Emit a transfer event
        emit Transfer(from, to, tokenId, amount);
    }

    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }




    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
