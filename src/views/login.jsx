var React = require('react');
var ReactDOM = require('react-dom');
var reqwest = require('reqwest');
var socket = require('socket.io-client')('http://localhost:3000');

module.exports = React.createClass({
	handlelogin:function(){
		var that = this;
		var dataObj = {
			name: ReactDOM.findDOMNode(that.refs.name).value,
		    password: ReactDOM.findDOMNode(that.refs.pwd).value,
		    headimg:'img/h'+Math.ceil(Math.random()*10)+'.png'
		};
		if(dataObj.name == '' || dataObj.password == '') return;
		console.log(dataObj)
		socket.emit('login',dataObj);
		location.hash = '/chat';
	},
	render:function(){
		return (
			<div className="login-box">
				<h1>登录</h1>
				<div className="input-group">
					<input name="name" ref="name" type="text" placeholder="昵称" maxlength="10" />
				</div>
				<div className="input-group">
					<input name="password" ref="pwd" type="password" placeholder="密码" maxlength="20" />
				</div>
				<div className="input-group">
					<a className="log-btn" href="javascript:;" onClick={this.handlelogin}>登录</a>
					<a href="#/register">注册</a>
				</div>
			</div>
		)
	}
})