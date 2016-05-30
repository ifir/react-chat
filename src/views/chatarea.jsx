var React = require('react');
var reqwest = require('reqwest');
var socket = require('socket.io-client')('http://localhost:3000');
//组件
var Message = require('../components/message.jsx');
var Tools = require('../components/tools.jsx');
var Text = require('../components/text.jsx');

module.exports = React.createClass({
	render:function(){
		return (
			<div className="chatarea">
				<Message msgArray={this.props.msgArray} user={this.props.user}/>
				<Tools onNewMsg={this.props.onNewMsg} headimg={this.props.headimg}/>
				<Text onNewMsg={this.props.onNewMsg} user={this.props.user} headimg={this.props.headimg}/>
			</div>
		)
	}
})