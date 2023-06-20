// 6-13 copied from Fantom project 

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract SFTix is ERC1155, Ownable {

    // Create a mapping, isEventOwner
    mapping(address => bool) public isEventCreator;


    // Array of GA ticket prices.
    uint256[] public _Array_GA;

    // Array of VIP ticket prices.
    uint256[] public _Array_VIP;

    constructor(uint256 _GASupply, uint256 _GAPrice, uint256 _VIPSupply, uint256 _VIPPrice) ERC1155("https://example.com/api/ticket/{id}.json") {
        // Set the value of the mapping to true.
        isEventCreator[msg.sender] = true;

        // Initialize and set the GA ticket array.
        _Array_GA.push(_GAPrice);
        _Array_GA.push(_GASupply);

        // Initialize and set the VIP ticket array.
        _Array_VIP.push(_VIPPrice);
        _Array_VIP.push(_VIPSupply);

    }
    // Mint to contract deployer address
    function mint( address to, uint256 tokenId, uint256 amount, bytes4 data) public { 
        to = 0xE83897F5a8c428203dfB8b12AD242415D3c99d67;

        // Check if the caller is the contract deployer.
        require(isEventCreator[msg.sender]);

        // Check if the token ID is valid.
        require(tokenId < _Array_GA.length || tokenId < _Array_VIP.length);

        // Check if the amount is valid.
        require(amount > 0);

        // Mint all tokens to the ticket market address.
        for (uint i = 0; i < _Array_GA.length; i++) {
            mint(to, i, _Array_GA[i], data);
        }

        for (uint i = 0; i < _Array_VIP.length; i++) {
            mint(to, i + _Array_GA.length, _Array_VIP[i], data);
        }
    }

}

