const express = require("express");

const router = express.Router();

const Calculator = require("../components/calc");

router.get("/", (req, res, next) => {
  const myCalc = new Calculator();
  const x = Number(req.query.val1);
  const y = Number(req.query.val2);

  res.render("calculator", {
    val1: x,
    val2: y,
    add: myCalc.add(x, y),
    remove: myCalc.remove(x, y),
    multiply: myCalc.multiply(x, y),
    divide: Number.isNaN(myCalc.divide(x, y))
      ? 0
      : myCalc.divide(x, y).toFixed(2),
  });
});

module.exports = router;