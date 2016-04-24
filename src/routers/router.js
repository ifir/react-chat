var express = require('express');
var router = express.Router();
//var userModel = require('../data/model/user');//加载用户模型
//var listModel = require('../data/model/list');//加载列表模型

router.get('/', function(req, res, next) {
  res.sendfile(__dirname + '/index.html');
});


module.exports = router;