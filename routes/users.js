const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json('TP, PS, DT, VK');
});

module.exports = router;


router.get('/sabotage', (req, res) => {
  res.json('TP, PS, DT, VK');
});