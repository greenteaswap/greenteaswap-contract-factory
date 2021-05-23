const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
const mnemonicBscTestnet = fs.readFileSync("./secrets/.bsc-testnet").toString().trim();
const mnemonicBscMainnet = fs.readFileSync("./secrets/.bsc-mainnet").toString().trim();

module.exports = {
  networks: {
    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonicBscTestnet, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      gasPrice:  10000000000, // 20000000000 (Default is 20 Gwei)
      skipDryRun: true, 
    },
    bscMainnet: {
      provider: () => new HDWalletProvider(mnemonicBscMainnet, `https://bsc-dataseed1.binance.org`),
      network_id: 56, 
      confirmations: 10,
      timeoutBlocks: 200,
      gasPrice:  10000000000 / 2,
      skipDryRun: true, 
    },
  },
  compilers: {
    solc: {
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 50
        }
      },
    }
  }
};
