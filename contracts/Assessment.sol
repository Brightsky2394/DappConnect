// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Assessment {
    uint public balance;
    address public owner;

    // Event to be emitted on deposit and withdraw
    event Deposit(address indexed from, uint amount);
    event Withdraw(address indexed to, uint amount);

    constructor(uint _initBalance) {
        balance = _initBalance;
        owner = msg.sender;
    }

    function deposit(uint _amount) public {
        require(_amount > 0, "Deposit amount must be greater than zero");
        balance += _amount;
        emit Deposit(msg.sender, _amount);
    }

    function withdraw(uint _amount) public {
        require(_amount > 0, "Withdraw amount must be greater than zero");
        require(balance >= _amount, "Insufficient balance");
        balance -= _amount;
        emit Withdraw(msg.sender, _amount);
    }

    function getBalance() public view returns (uint) {
        return balance;
    }
}
