const hre = require("hardhat");

async function main() {
  
  const Chalan = await hre.ethers.getContractFactory("chalan");
  const chalan = await Chalan.deploy();

  await chalan.deployed();

  console.log(
    "Chalan contract is deployed with 69 others❤️",
    chalan.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
