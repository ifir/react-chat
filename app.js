var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
//加载路由
// var routes = require('./src/routers/router.js');
//连接mongodb
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/chat');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));


//Model
// var Message = require('./src/data/model/msgModel.js');
// var User = require('./src/data/model/userModel.js');


//路由
// var obj = {
//   user: null,
//   msgList : null,
//   msgerr:'',
//   status:false
// }
app.get('/', function(req, res){
  res.sendfile(__dirname + '/dist/chat.html');
  // var msg = {
  //       headimg:'./img/h3.png',
  //       time:'20:00',
  //       text:'Hello，这是一个基于React + Webpack构建的简单chat示例，聊天记录保存在mongodb。简单演示了React的基础特性和webpack配置。',
  //       myself:false
  //     };
});
//注册
// app.post('/register', function (req, res) {
//   console.log('register')
//   var registerData = {
//     name: req.body.name,
//     password: req.body.password,
//     headimg:'img/h'+Math.ceil(Math.random()*10)+'.png'
//   };
//   User.create(registerData, function(err, data){
//     if(err){
//       console.log(err);
//     }else{
//       obj.status = true;
//       obj.user = data;
//       res.send(obj);
//     }
//   })
// });
//登录
// app.post('/login', function(req, res){
//   console.log('login')
//   var loginData = {
//     name: req.body.name
//   };
//   User.findOne(loginData, function(err, data){
//     if(err){
//       console.log(err);
//     }else if(data){
//       if(data.password == req.body.password){
//         obj.status = true;
//         obj.user = data;
//         res.send(obj);
//       }else{
//         obj.msgerr = '密码错误';
//         res.send(obj);
//       }
//     }else{
//       obj.msgerr = "用户名不存在";
//       res.send(obj);
//     }
//   })
// })
// app.get('/chat', function(req, res){
//   console.log('chat')
//   if(obj.user === null){
//     //重定向到首页
//     res.redirect('/');
//   }
//   Message.find({},function(err, data){
//     if(err){
//       console.log(err)
//       return;
//     }
//     if(data){
//       obj.msgList = data;
//       res.send(obj)
//     }
//   })
// })
var userList = [], userInfo=null;
//socket
io.on('connection', function (socket) {
  console.log('一个用户连接')
  //用户下线
  socket.on('disconnect', function () {
    console.log('用户下线');
  });
  //用户登录
  socket.on('login', function(user){
    user.id = socket.id;
    userList.push(user);
    io.emit('userList', userList);
    socket.broadcast.emit('loginInfo', [user.name + '上线了', user.headimg]);
    //socket.broadcast.emit('loginInfo')
  });
  //发送所有人
  socket.on('toAll',function(msgObj){
    io.emit('allMsg',msgObj);
  });
  socket.on('sendImageToALL',function(msgObj){
    io.emit('allimg',msgObj);
  });
});




server.listen(3000, function () {
  console.log('===============访问localhost:3000===============');//在命令行输出Hello Node!
});
