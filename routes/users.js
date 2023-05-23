var express = require('express');
var router = express.Router();

/* GET users listing. */
const users = [
  "TP", "PS", "DT", "VK"
]
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
