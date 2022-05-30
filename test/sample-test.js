const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("aSomeTest", function () {
  it("Should return the new total deposit", async function () {
    const THECONTRACT = await ethers.getContractFactory("contract");
    let asd = await ethers.getSigners()
    let user1 = asd[0].address
    let user2 = asd[1].address
    const deployedContract = await THECONTRACT.deploy(user1);
    await deployedContract.deployed();
  });
});
