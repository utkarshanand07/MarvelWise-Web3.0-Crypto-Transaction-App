require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/mG5y-pnowTzSb8xJPigvlNX8OUGCQJib',
      accounts: ['9b2af0faf24af8bd84565ae8955d7615102751e145614b1d5e6beb3c65e73a42'],
    },
  },
};