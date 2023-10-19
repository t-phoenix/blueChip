require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.6.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200000
      }
    }
  },
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-mainnet.g.alchemy.com/v2/",
        blockNumber: 48289516,
        httpHeaders: {
          "Authorization": `Bearer ${process.env.ALCHEMY_KEY_POLYGON}`
        }
      },
    },
    ganache: {
      url: "http://127.0.0.1:7545",

    },
    goerli:{
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: [process.env.PRIVATE_KEY1, process.env.PRIVATE_KEY7, process.env.PRIVATE_KEY8 ]
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY1, process.env.PRIVATE_KEY7, process.env.PRIVATE_KEY8 ]

    }
    
  },
};
