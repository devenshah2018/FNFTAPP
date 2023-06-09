// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract SFTix is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    // At contract constructor accept 2 tokens price and supply
    uint256 public constant _GA = 0;
    uint256 public constant _VIP = 1;

    address caller = msg.sender;

    // Mapping from token ID to token type.
    mapping(uint256 => string) public tokenType;

    // Constructor function.
    constructor() ERC1155("https://example.com/api/ticket/{id}.json") {
        // Mint 1000 GA tickets.
        mint(msg.sender, 1000, _GA, "");
        // Mint 50 VIP tickets.
        mint(msg.sender, 50, _VIP, "");
    }

    uint256 public constant GA_TOKEN_ID = 1;
    uint256 public constant VIP_TOKEN_ID = 2;

    uint256 public _GAPrice;
    uint256 public _VIPPrice;

    uint256 public _GASupply;
    uint256 public _VIPSupply;

    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId,
        uint256 amount
    );

    function _setTokenPrices(
        uint256[] memory _GATickets,
        uint256[] memory _VIPTickets
    ) public view {
        _GATickets[0] = _GAPrice;
        _GATickets[1] = _GASupply;

        _VIPTickets[0] = _VIPPrice;
        _VIPTickets[1] = _VIPSupply;
    }



    function mint(
        address to,
        uint256 tokenId,
        uint256 amount,
        bytes4 data
    ) public payable onlyOwner {
        require(msg.value >= _GAPrice);
        to = msg.sender;
        //Check if msg.value is >= _GAPrice
        if (tokenId == GA_TOKEN_ID) {
            mint(to, tokenId, amount, data);
        } else {
            if (tokenId == VIP_TOKEN_ID) {
                mint(to, tokenId, amount, data);
            }
        }
    }

    function _safeBatchTransfer(
        address[] memory from,
        address[] memory to,
        uint256[] memory tokenIds,
        uint256[] memory amounts
    ) internal {
        // Check if the caller has sufficient balance
        for (uint256 i = 0; i < from.length; i++) {
            require(
                balanceOf(from[i], tokenIds[i]) >= amounts[i],
                "Insufficient balance"
            );
        }

        // Transfer the tokens from 'from' to 'to'
        for (uint256 i = 0; i < from.length; i++) {
            safeTransferFrom(from[i], to[i], tokenIds[i], amounts[i], "");
        }

        // Emit a transfer event
        for (uint256 i = 0; i < from.length; i++) {
            emit Transfer(from[i], to[i], tokenIds[i], amounts[i]);
        }
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
