var express = require('express');
var path = require('path');
var crypto = require( 'crypto' );//引入node中crypto加密模块
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var _ = require('underscore');
//加载路由
// var routes = require('./src/routers/router.js');
//连接mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));


//Model
var User = require('./src/data/model/userModel.js');


//路由
var obj = {
  user: null,
  msgerr:'',
  status:false
}
app.get('/', function(req, res){
  res.sendfile(__dirname + '/dist/chat.html');
});
//注册
app.post('/register', function (req, res) {
  console.log('register')
  var registerData = {
    name: req.body.name,
    password: md5(req.body.password),
    headimg:'img/h'+Math.ceil(Math.random()*10)+'.png'
  };
  User.create(registerData, function(err, data){
    if(err){
      console.log(err);
    }else{
      obj.status = true;
      obj.user = data;
      res.send(obj);
      obj.status = false;
    }
  })
});
//登录
app.post('/login', function(req, res){
  console.log('login')
  var loginData = {
    name: req.body.name
  };
  User.findOne(loginData, function(err, data){
    if(err){
      console.log(err);
    }else if(data){
      if(data.password == md5(req.body.password)){
        obj.status = true;
        obj.user = data;
        res.send(obj);
        obj.status = false;
      }else{
        obj.msgerr = '密码错误';
        res.send(obj);
      }
    }else{
      obj.msgerr = "用户名不存在";
      res.send(obj);
    }
  })
})
app.get('/chat', function(req, res){
    res.send(obj);
})
var userList = [], msgList=[];
//socket
io.on('connection', function (socket) {
  console.log('一个用户连接')
  //用户下线
  socket.on('disconnect', function () {
    var user = _.findWhere(userList,{id:socket.id});
    if(user){
      userList = _.without(userList,user);
      //socketList = _.without(socketList,socket);
      //send the userlist to all client
      io.emit('userList',userList);
      //send login info to all.
      socket.broadcast.emit('loginInfo',[user.name + '下线了', user.headimg]);
    }
  });
  //用户登录
  socket.on('login', function(user){
    user.id = socket.id;
    userList.push(user);
    io.emit('userList', userList);
    socket.broadcast.emit('loginInfo', [user.name + '上线了', user.headimg]);
  });
  //发送所有人
  socket.on('sendmsg',function(msgObj){
    console.log(msgObj)
    msgList.push(msgObj);
    socket.broadcast.emit('allmsg',msgList);
  });
  socket.on('sendimg',function(msgObj){
    msgList.push(msgObj);
    socket.broadcast.emit('allmsg',msgList);
  });
});
//密码加密
function md5(data) {
     //crypto.createHash(algorithm)创建并返回一个哈希对象,algorithm有 'sha1'、'md5'、'sha256'、'sha512' 等等
     var md5 = crypto.createHash('md5');
     //hash.update(data, [input_encoding])更新哈希对象, 可以通过input_encoding指定编码为'utf8'、'ascii'或者 'binary'。如果没有指定编码，将作为二进制数据（buffer）处理。
     //hash.digest([encoding])计算传入的所有数据的摘要值, encoding可以是'hex'、'binary'或者'base64'，如果没有指定，会返回一个buffer对象。
     var newPsd = md5.update(data).digest('hex');
    //return crypto.createHash('md5').update(data).digest('hex').toLowerCase();  
    return newPsd;
}


server.listen(3000, function () {
  console.log('===============访问localhost:3000===============');//在命令行输出Hello Node!
});
