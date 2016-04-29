var express = require('express');
var path = require('path');
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
    password: req.body.password,
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
      if(data.password == req.body.password){
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
  console.log(obj.user)
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




server.listen(3000, function () {
  console.log('===============访问localhost:3000===============');//在命令行输出Hello Node!
});
