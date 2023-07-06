pragma solidity >=0.4.17 <1.0.0;

contract Inbox {
    string public message;
    
    constructor(string memory initalMessage) {
        message = initalMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
   
}