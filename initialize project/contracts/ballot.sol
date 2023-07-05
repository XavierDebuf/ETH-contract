pragma solidity >=0.4.17 <1.0.0;

contract Ballot {
    string public message;
    
    constructor(string memory initalMessage) public {
        message = initalMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
   /* function doMath(int a, int b) public {
        a + b;
        b - a;
        b * a;
        a == 0;
    }*/
}