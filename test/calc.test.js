const assert = require("assert");
const Calculator = require("../components/calc");

describe("Calculator", function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  describe("#add", function () {
    it("should add two numbers", function () {
      const result = calculator.add(2, 3);
      assert.strictEqual(result, 5);
    });
  });

  describe("#remove", function () {
    it("should subtract two numbers", function () {
      const result = calculator.remove(5, 2);
      assert.strictEqual(result, 3);
    });
  });

  describe("#multiply", function () {
    it("should multiply two numbers", function () {
      const result = calculator.multiply(2, 4);
      assert.strictEqual(result, 8);
    });
  });

  describe("#divide", function () {
    it("should divide two numbers", function () {
      const result = calculator.divide(6, 2);
      assert.strictEqual(result, 3);
    });
  });

  describe("#getResult", function () {
    it("should return the current result", function () {
      calculator.add(2, 3);
      const result = calculator.getResult();
      assert.strictEqual(result, 5);
    });
  });
  describe("#multiply", function () {
    it("should multiply two numbers", function () {
      const result = calculator.multiply(2, 4);
      assert.strictEqual(result, 12);
    });
  });
});

