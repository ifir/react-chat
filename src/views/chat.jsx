var React = require('react');
var reqwest = require('reqwest');
var socket = require('socket.io-client')('http://localhost:3000');
//视图
var Sidebar = require('./sidebar.jsx');
var Chatarea = require('./chatarea.jsx');


module.exports = React.createClass({
	getInitialState() {
	    return {
	    	userList : [],
	    	msgArray:[],
			user:'',
			headimg:''
	    }
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
	    socket.on('userList', function(user){
	   		that.setState({
	   			userList: user
	   		})
	   	})
	},
	render:function(){
		return (
			<div className="chat-box">
				<Sidebar userList={this.state.userList}/>
				<Chatarea onNewMsg={this.onNewMsg} msgArray={this.state.msgArray} user={this.state.user} headimg={this.state.headimg}/>
			</div>
		)
	}
})