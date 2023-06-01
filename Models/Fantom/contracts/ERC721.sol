// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; 
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC721 is ERC721, Ownable {
    constructor() ERC721("ERC721", "ERC721") {}

    function safeMint(address to, uint256 tokenID) public {
        _safeMint(to, tokenID);
    }
}