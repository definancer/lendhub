const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    main: {
      provider: new HDWalletProvider(process.env.MNENOMIC, `http://39.102.101.142:8555`, 10, 5),
      network_id: '8555',
    },
  },
  compilers: {
    solc: {
      version: '0.5.16', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 250,
        },
      },
    },
  },
};
