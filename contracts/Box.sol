// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

// Import Ownable from the OpenZeppelin Contracts library
import "hardhat/console.sol";

// Make Box inherit from the Ownable contract
contract Box {
    uint256 private value;

    event ValueChanged(uint256 newValue);

    // The onlyOwner modifier restricts who can call the store function
    function store(uint256 newValue) public {
        value = newValue;
        console.log(value);
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }
}
