const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

// module.exports = function(deployer){
//   deployer.deploy(TokenFarm)
// }

module.exports = async function(deployer, network, accounts) {
  //Deploy Mock DAI Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  //deploy Dapp Token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()

  //deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  //transfer all tokens to Tokenfarm (1 million)
  await dappToken.transfer(tokenFarm.address, '100000000000000000000000')

  //transfer 10 Dai Tokens to investor
  await daiToken.transfer(accounts[1], '100000000000000000000000')
}