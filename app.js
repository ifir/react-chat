var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '.')));


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
//socket
var msgList = [{
				time:'20:00',
				myself:false,
				headimg:'dist/img/h3.png',
				text:'Hello，这是一个基于React + Webpack构建的简单chat示例，聊天记录保存在mongodb。简单演示了React的基础特性和webpack配置。'
			},
			{
				time:'22:00',
				myself:true,
				headimg:'dist/img/h1.png',
				text:'Hello'
			}];
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
