const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const {inteface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'sustain clerk comfort buddy milk balcony desert knock smile deal mind eternal',
    'https://sepolia.infura.io/v3/b5c4ddb991c54ccf82d3e43d2c318502'
);
const web3 = new Web3(provider);