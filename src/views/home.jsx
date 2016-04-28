var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<div className="nav">
					<i className="icon icon-head nav-user"></i>
					<div className="link">
						<a href="#/login">登录</a>
						<a href="#/register">注册</a>
					</div>
			</div>
		)
	}
})