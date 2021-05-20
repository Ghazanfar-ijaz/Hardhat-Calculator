const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Calculator", () => {
  let calculator;

  beforeEach(async () => {
    Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  });

  it('Should add 2 numbers', async function () {
    expect(await calculator.add(2, 4)).to.equal(6);
  });

  it('Should subtract 2 numbers', async function () {
    expect(await calculator.sub(9, 4)).to.equal(5);
  });

  it('Should divide 2 numbers', async function () {
    expect(await calculator.div(20, 2)).to.equal(10);
  });

  it('Should multiply 2 numbers', async function () {
    expect(await calculator.mul(6, 3)).to.equal(18);
  });

  it('Should give modulo 2 numbers', async function () {
    expect(await calculator.mod(2, 3)).to.equal(2);
  });
});
