var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
//加载路由
// var routes = require('./src/routers/router.js');
//连接mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');

app.use(express.static(path.join(__dirname, 'dist')));

var Message = require('./src/data/model/msgModel.js');
var msgList = null;
app.get('/', function(req, res){
  console.log('chat')
  res.sendfile(__dirname + '/dist/chat.html');
  // var msg = {
  //       headimg:'./img/h3.png',
  //       time:'20:00',
  //       text:'Hello，这是一个基于React + Webpack构建的简单chat示例，聊天记录保存在mongodb。简单演示了React的基础特性和webpack配置。',
  //       myself:false
  //     };
  // Message.create(msg,function(err,data){
  //   if(err){
  //         console.log('信息写入失败，请刷新浏览器='+err);
  //   }else{
  //     console.log('插入成功='+data)
  //   }
  // })
  Message.find({},function(err, data){
    if(err){
      console.log(err)
      return;
    }
    if(data){
      msgList = data;
      console.log(msgList)
    }
  })
});
app.get('/login', function (req, res) {
  console.log('login')
  res.sendfile(__dirname + '/dist/login.html');
});


//socket
io.on('connection', function (socket) {
  console.log('一个用户连接')
  //用户下线
  socket.on('disconnect', function () {
    console.log('用户下线');
  });
  //发送信息
  socket.on('msg', function(msg){
  	msg.id = socket.id;
  	msgList.push(msg)
  	io.emit('historyMsg',msgList);
  });
  //用户上线
  io.emit('online','你上线了');
  io.emit('historyMsg',msgList);
});




server.listen(3000, function () {
  console.log('===============访问localhost:3000===============');//在命令行输出Hello Node!
});
