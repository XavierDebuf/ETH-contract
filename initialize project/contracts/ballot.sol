pragma solidity >=0.4.17 <0.9.0;

contract Ballot {
    string public message;
    
    constructor (string memory initalMessage) public {
        message = initalMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string memory) {
        return message;
    }
    
}