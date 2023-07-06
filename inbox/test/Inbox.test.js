const ganache = require('ganache');
const { Web3 } = require('web3');
const assert  = require('assert');
const web3 = new Web3(ganache.provider());
const {interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async ()=>{
   //get a list of all account
    accounts = await web3.eth.getAccounts();
   //use one of these account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments:['it works!'] })
    .send({ from: accounts[2], gas: '1000000' });
});
describe ('Inbox',()=>{
    it('deploys a contract', ()=>{
        assert.ok(inbox.options.address);
    });
   it('get a initial value', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,'it works!');
    });
    it('can update value', async () => {
        const messageModified = await inbox.methods.setMessage('message changed').send({
            from: accounts[2]
        });
        const message = await inbox.methods.message().call();
        assert.equal(message,'message changed');
    })
});
/*describe ('',()=>{
    it('', ()=>{

    });
    it('', ()=>{
        
    });
});*/