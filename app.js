var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, '.')));

server.listen(3000, function () {
  console.log('===============访问localhost:3000===============');//在命令行输出Hello Node!
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('一个用户连接')
  socket.on('disconnect', function () {
    console.log('用户下线');
  });
  io.emit('online','你上线了')
});
