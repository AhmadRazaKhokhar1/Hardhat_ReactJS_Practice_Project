require("@nomiclabs/hardhat-waffle");
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    localhost:{
      url:"http://localhost:8545"
    },
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/rT-GdJ_OnIk5U3ypi2ZCnxHb0eh9QQKL ",
      accounts: [`59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`]
    }
  }
};
