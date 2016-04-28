var React = require('react');
var reqwest = require('reqwest');
var socket = require('socket.io-client')('http://localhost:3000');
//组件
var Message = require('../components/message.jsx');
var Tools = require('../components/tools.jsx');
var Text = require('../components/text.jsx');

module.exports = React.createClass({
	getInitialState:function() {
		var msgArray=[];
	    return {
	          msgArray:msgArray
	    };
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
				<Tools onNewMsg={this.onNewMsg}/>
				<Text onNewMsg={this.onNewMsg} />
			</div>
		)
	}
})