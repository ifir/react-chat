var React = require('react');
var ReactDOM = require('react-dom');
var socket = require('socket.io-client')('http://localhost:3000');

module.exports = React.createClass({
	handleSubmit:function(){
		var val = ReactDOM.findDOMNode(this.refs.msg).value;
		var date = new Date();
		var nowTime = date.getHours()+':'+date.getMinutes();
		var newMsg = {
			time:nowTime,
			myself:true,
			headimg:'./img/h1.png',
			text: val
		}
		if(val == '') return;
		socket.emit('msg',newMsg)
		ReactDOM.findDOMNode(this.refs.msg).value = '';
		this.props.onNewMsg( newMsg );
	},
	render: function(){
		return (
			<div className="enter-text">
				<textarea ref="msg" className="textarea" placeholder="按 Ctrl + Enter 发送" maxlength="100"></textarea>
				<input onClick={this.handleSubmit} className="btn btn-enter" type="button" value="发送"/>
			</div>
		)
	}
})