// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";


// Receive ERC-1155 contract addresses marked abstract (for templating purposes)
abstract contract TokenReceiver is ERC1155Receiver {

    // Mapping from token ID to token balance.
    mapping(uint256 => uint256) public tokenBalance;

    // Event to emit when tokens are received.
    event Received(
        uint256 tokenId,
        uint256 amount,
        address from
    );

        // Function to receive tokens.
    function onERC1155Received(
        address sender,
        uint256[] memory tokenIds,
        uint256[] memory amounts
    ) public  returns(bool) {

        // Check if the sender is valid.
        require(sender != address(0));

        // Check if the token IDs are valid.
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(tokenIds[i] > 0);
        }

        // Check if the amounts are valid.
        for (uint256 i = 0; i < amounts.length; i++) {
            require(amounts[i] > 0);
        }

        // Update the token balances.
        for (uint256 i = 0; i < tokenIds.length; i++) {
            tokenBalance[tokenIds[i]] += amounts[i];
        }

        // Emit the Received event.
        emit Received(
            tokenIds[0],
            amounts[0],
            sender
        );

        // Return true to indicate that the tokens were received successfully.
        return true;
    }
}
