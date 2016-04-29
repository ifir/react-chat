var React = require('react');
var reqwest = require('reqwest');
var socket = require('socket.io-client')('http://localhost:3000');
//组件
var Message = require('../components/message.jsx');
var Tools = require('../components/tools.jsx');
var Text = require('../components/text.jsx');

module.exports = React.createClass({
	getInitialState:function() {
	    return {
			msgArray:[],
			user:'',
			headimg:''
	    };
	},
	onNewMsg:function(newMsg){
		console.log('newMsg=='+newMsg)
		if(newMsg.user == this.state.user)
		var newMsgArray = this.state.msgArray.concat(newMsg);
		console.log('newMsgArray='+newMsgArray)

		this.setState({
			msgArray : newMsgArray
		})
	},
	componentDidMount:function() {
		var that = this;
		reqwest('/chat', function (data) {
		  if(data.user.headimg != ''){
		  	console.log(data.user.name)
		  	that.setState({
				user:data.user.name,
				headimg:data.user.headimg
			})
		  }
		})
	    socket.on('allmsg', function(data){

	   		that.setState({
	   			msgArray: data
	   		})
	   	})
	},
	render:function(){
		return (
			<div className="chatarea">
				<Message msgArray={this.state.msgArray} user={this.state.user}/>
				<Tools onNewMsg={this.onNewMsg}/>
				<Text onNewMsg={this.onNewMsg} user={this.state.user} headimg={this.state.headimg}/>
			</div>
		)
	}
})