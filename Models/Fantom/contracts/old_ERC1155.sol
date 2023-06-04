// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

// contract SFTix is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    
//     // string public GATicket; 
//     uint256 public constant GA_token = 1;
//     uint256 public constant VIP_token = 2;
//     uint256 public constant RSVP_token = 3;

//     uint256 public ticketGAPrice;
//     uint256 public ticketVIPPrice;
//     uint256 public ticketRSVPPrice;

//     uint256 public maxSupplyGA;
//     uint256 public maxSupplyVIP;
//     uint256 public maxSupplyRSVP;

//     mapping(uint256 => uint256) public tokenSupply;

//     constructor() ERC1155("") {}

//     function setURI(string memory newURI) public onlyOwner {
//         _setURI(newURI);
//     }

//     function setTicketPrice(uint256 _ticketGAPrice, uint256 _ticketVIPPrice, uint256 _ticketRSVPPrice) public onlyOwner {
//         ticketGAPrice = _ticketGAPrice;
//         ticketVIPPrice = _ticketVIPPrice;
//         ticketRSVPPrice = _ticketRSVPPrice;
//     }

//     function setSupply(uint256 _maxSupplyGA, uint256 _maxSupplyVIP, uint256 _maxSupplyRSVP) public onlyOwner {
//         maxSupplyGA = _maxSupplyGA;
//         maxSupplyVIP = _maxSupplyVIP;
//         maxSupplyRSVP = _maxSupplyRSVP;
//     }

//     function buyTicket(uint256 tokenId) external payable {
//         require(tokenId >= GA_token && tokenId <= RSVP_token, "Invalid token ID");

//         uint256 price;
//         uint256 maxSupply;
//         if (tokenId == GA_token) {
//             price = ticketGAPrice;
//             maxSupply = maxSupplyGA;
//         } else if (tokenId == VIP_token) {
//             price = ticketVIPPrice;
//             maxSupply = maxSupplyVIP;
//         } else if (tokenId == RSVP_token) {
//             price = ticketRSVPPrice;
//             maxSupply = maxSupplyRSVP;
//         }

//         // require(msg.value >= price, "Insufficient payment");
//         require(tokenSupply[tokenId] < maxSupply, "Maximum supply reached");

//         tokenSupply[tokenId] += 1;

//         _mint(msg.sender, tokenId, 1, "");
//     }

//     function withdrawFunds() external onlyOwner {
//         payable(owner()).transfer(address(this).balance);
//     }

//     function _beforeTokenTransfer(
//         address operator,
//         address from,
//         address to,
//         uint256[] memory ids,
//         uint256[] memory amounts,
//         bytes memory data
//     ) internal override(ERC1155, ERC1155Supply) {
//         super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
//     }
// }
