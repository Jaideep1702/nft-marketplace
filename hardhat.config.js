/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
 mumbai: {
   url: "https://rpc-mumbai.maticvigil.com/v1/782d263796f9fd853574c5bf17b069c9ab852fb2",
   accounts: [`eec5579e3bef1f19aeb01634d5a05941274b641f81607f7712b6d27b7e69e8b4`]
 }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
