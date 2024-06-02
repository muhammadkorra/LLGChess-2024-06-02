require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.5",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ankr.com/bsc",
        enabled: true,
      },
    },
  },
};
