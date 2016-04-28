var React = require('react');
var reqwest = require('reqwest');
var ReactDOM = require('react-dom');
module.exports = React.createClass({
	handleregister:function(){
		var that = this;
		
	},
	render:function(){
		return (
			<div className="register-box">
				<h1>注册</h1>
				<div className="input-group">
					<input name="name" ref="name" type="text" placeholder="昵称" maxlength="10" />
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