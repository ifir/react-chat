var React = require('react');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var socket = require('socket.io-client')('http://localhost:3000');
module.exports = React.createClass({
	handleregister:function(){
		var that = this;
		var dataObj = {
			name: ReactDOM.findDOMNode(that.refs.name).value,
		    password: ReactDOM.findDOMNode(that.refs.pwd).value
		};
		if(dataObj.name == '' || dataObj.password == '') return;
		$.ajax({
		    url: '/register',
		    type: 'post',
		    data: dataObj,
		    success: function (data) {
		      if(data.status){
		      	dataObj.headimg = data.user.headimg;
		      	socket.emit('login',dataObj);
				location.hash = '/chat';
		      }else{
		      	alert(data.msgerr)
		      }
		    }
		})
	},
	render:function(){
		return (
			<div className="register-box">
				<h1>注册</h1>
				<div className="input-group">
					<input name="name" ref="name" type="text" placeholder="昵称" maxlength="10" autofocus/>
				</div>
				<div className="input-group">
					<input name="password" ref="pwd" type="password" placeholder="密码" maxlength="20" />
				</div>
				<div className="input-group">
					<a className="reg-btn" href="javascript:;" onClick={this.handleregister}>注册</a>
					<a href="#/login">登录</a>
				</div>
			</div>
		)
	}
})