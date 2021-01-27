const TokenFarm = artifacts.require('Migrations')

module.exports = function(deployer) {
  deployer.deploy(TokenFarm);
}