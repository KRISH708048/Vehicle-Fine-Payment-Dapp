//SPDX-License-Identifier: MIT 

pragma solidity ^0.8.18;

contract TrafficFiningSystem {
    // State variables
    address public owner;

    mapping(address => uint256) public balance;
    mapping(string => uint256) public fineAmounts;
    mapping(address => mapping(string => uint256)) public fineCounts;
    mapping(address => mapping(string => uint256)) public finePaymentTimestamps;

    // Events
    event FineIssued(address indexed driver, string indexed licensePlate, uint256 fineAmount);
    event FinePaid(address indexed driver, uint256 fineAmount);

    // Constructor
    constructor() payable {
        owner = msg.sender;
        fineAmounts["overspeeding"] = 0.002 ether;
        fineAmounts["redlight"] = 0.001 ether;
        fineAmounts["noBelt"] = 0.003 ether;
        fineAmounts["drink_and_drive"] = 0.003 ether;
    }

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    // Functions
    function issueFine(string memory licensePlate, string memory infractionType) public {
        uint256 fineAmount = fineAmounts[infractionType];
        require(fineAmount > 0, "Invalid infraction type");
        balance[owner] += fineAmount;
        balance[msg.sender] -= fineAmount;
        fineCounts[msg.sender][infractionType]++;
        finePaymentTimestamps[msg.sender][infractionType] = 0;
        emit FineIssued(msg.sender, licensePlate, fineAmount);
    }

    function payFine(string memory infractionType) public payable {
        uint256 fineAmount = fineAmounts[infractionType];
        require(fineAmount > 0, "Invalid infraction type");
        require(payable(msg.sender).balance >= fineAmount, "Insufficient payment amount");
        require(finePaymentTimestamps[msg.sender][infractionType] == 0, "Fine already paid");
   
        balance[msg.sender] += msg.value;
        balance[owner] -= msg.value;
        finePaymentTimestamps[msg.sender][infractionType] = block.timestamp;

        emit FinePaid(msg.sender, fineAmount);
    }
}