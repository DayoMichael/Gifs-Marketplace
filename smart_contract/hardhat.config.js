
//https://eth-ropsten.alchemyapi.io/v2/J1NbYP5Rs4A9cDh2IswGI3kkLNHJRadz
require ('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity :'0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/J1NbYP5Rs4A9cDh2IswGI3kkLNHJRadz',
      accounts: ['6b0fb04191acdb2939b84cc0ff4ad7c0ae494c39f4b9e8d98b21b26831f28105']

    },
  },
}