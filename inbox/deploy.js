const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
 
const { abi, evm } = require('./compile');
 
provider = new HDWalletProvider(
    'sustain clerk comfort buddy milk balcony desert knock smile deal mind eternal',
    'https://sepolia.infura.io/v3/b5c4ddb991c54ccf82d3e43d2c318502'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
 
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
 
deploy();