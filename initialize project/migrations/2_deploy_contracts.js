var Inbox=artifacts.require ("../contracts/ballot.sol");
module.exports = function(deployer) {
      deployer.deploy(Inbox);
}