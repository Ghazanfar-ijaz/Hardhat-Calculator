const { expect } = require('chai');
const { ethers } = require('ethers');


describe("Calculator", () => {
  let Calculator, calculator;

  beforeEach(async () => {
    Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  });

  describe('Calculation', () => {
    it('Should add 2 numbers', async function () {
      const result = await calculator.add(2, 4);
      expect(result).to.equal(6);
    });

    it('Should subtract 2 numbers', async function () {
      const result = await calculator.sub(9, 4);
      expect(result).to.equal(5);
    });

    it('Should divide 2 numbers', async function () {
      const result = await calculator.div(20, 2);
      expect(result).to.equal(10);
    });

    it('Should multiply 2 numbers', async function () {
      const result = await calculator.mul(6, 3);
      expect(result).to.equal(18);
    });

    it('Should give modulo 2 numbers', async function () {
      const result = await calculator.mod(2, 3);
      expect(result).to.equal(2);
    });
  });
});