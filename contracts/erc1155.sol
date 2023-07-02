
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract EventTickets is ERC1155, Ownable, ERC1155Supply {
    
    // Declare all the type IDs
    uint256 public constant GENERAL = 0;
    uint256 public constant VIP = 1;


    
    constructor() ERC1155("") {
        uint256[] memory tokenIds = new uint256[](2);
        uint256[] memory amounts = new uint256[](2);

        tokenIds[0] = uint256(0);
        amounts[0] = uint256(2);

        tokenIds[1] = uint256(1);
        amounts[1] = uint256(1);

        _mintBatch(msg.sender, tokenIds, amounts, "");


    }


    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}