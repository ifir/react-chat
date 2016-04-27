var React = require('react');
var socket = require('socket.io-client')('http://localhost:3000');
module.exports = React.createClass({
	getInitialState:function(){
		return {message:''}
	},
	componentDidMount: function() {
		var that = this;
		socket.on('online', function (data) {
			that.setState({ message: data });
		})
	},
	render:function(){
		return (
			<div>
				<div className="headpic">
					<img src="./img/h1.png" alt="头像" />
					<span>FIR{this.state.message}</span>
				</div>
				<div className="search">
					<input className="search-input" type="text" placeholder="search user..."/>
					<i className="icon icon-search"></i>
				</div>
			</div>
		)
	}
})