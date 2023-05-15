require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18", 
  networks:{
    polygon_mumbai:{
      url:"https://special-little-sound.matic-testnet.discover.quiknode.pro/d5e70cf98d40c7423f609c0316b225503f647a5d/",
      accounts:["e741f8848d406731a90d1a4f66aa7d7111af3bf5e4cda03815a5a56e3413f3c6"],
    }
  },
};
