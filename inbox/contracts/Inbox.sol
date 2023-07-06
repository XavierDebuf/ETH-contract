pragma solidity >=0.4.17 <1.0.0;

contract Inbox {
    string public message;
    
    function Inbox (string initalMessage) public {
        message = initalMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
   
}