var express = require('express');
var router = express.Router();
var Message = require('../data/model/msgModel.js');
router.get('/', function(req, res) {
  res.send('哈哈');
});
module.exports = router;