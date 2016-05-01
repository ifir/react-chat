var React = require('react');
var ReactDOM = require('react-dom');
var reqwest = require('reqwest');
var socket = require('socket.io-client')('http://localhost:3000');

module.exports = React.createClass({
	handleSubmit:function(){
		var val = ReactDOM.findDOMNode(this.refs.msg).value;
		var date = new Date();
		var nowTime = date.getHours()+':'+date.getMinutes();
		var newMsg = {
			time:nowTime,
			myself:true,
			headimg:this.props.headimg,
			text: val,
			img:''
		}
		if(val == '') return;
		socket.emit('sendmsg', newMsg)
		ReactDOM.findDOMNode(this.refs.msg).value = '';
		this.props.onNewMsg( newMsg );
	},
	handleKeyDown:function(e){
			if(e.keyCode == 13 ){
				var val = ReactDOM.findDOMNode(this.refs.msg).value;
				var date = new Date();
				var nowTime = date.getHours()+':'+date.getMinutes();
				var newMsg = {
					time:nowTime,
					myself:true,
					headimg:this.props.headimg,
					text: val,
					img:''
				}
				if(val == '') return;
				socket.emit('sendmsg', newMsg)
				ReactDOM.findDOMNode(this.refs.msg).value = '';
				this.props.onNewMsg( newMsg );
			}
	},
	render: function(){
		return (
			<div className="enter-text">
				<textarea onKeyDown={this.handleKeyDown} ref="msg" className="textarea" placeholder="按 Enter 发送" maxlength="100" autofocus></textarea>
				<input onClick={this.handleSubmit} className="btn btn-enter" type="button" value="发送"/>
			</div>
		)
	}
})