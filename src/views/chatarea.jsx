var React = require('react');
//组件
var Message = require('../components/message.jsx');
var Tools = require('../components/tools.jsx');
var Text = require('../components/text.jsx');
var socket = require('socket.io-client')('http://localhost:3000');

module.exports = React.createClass({
	getInitialState:function() {
		var msgArray=[];
	    return {
	          msgArray:msgArray
	    };
	},
	componentDidMount: function() {
		var that = this;
		socket.on('historyMsg', function (data) {
			that.setState({ msgArray: data });
		})
	},
	onNewMsg:function(newMsg){
		var newMsgArray = this.state.msgArray.concat(newMsg);
		this.setState({
			msgArray : newMsgArray
		})
	},
	render:function(){
		return (
			<div className="chatarea">
				<Message msgArray={this.state.msgArray} />
				<Tools />
				<Text onNewMsg={this.onNewMsg} />
			</div>
		)
	}
})