var React = require('react');
var $ = require('jquery');
var socket = require('socket.io-client')('http://localhost:3000');
//视图
var Sidebar = require('./sidebar.jsx');
var Chatarea = require('./chatarea.jsx');


module.exports = React.createClass({
	getInitialState:function() {
	    return {
	    	userList : [],
	    	msgArray:[],
			user:'',
			headimg:''
	    }
	},
	onNewMsg:function(newMsg){
		var newMsgArray = this.state.msgArray.concat(newMsg);
		this.setState({
			msgArray : newMsgArray
		})
	},
	componentDidMount:function() {
	    var that = this;
		$.get("/chat",function(data){
			if(data.user.headimg && data.user.name){
				that.setState({
					user:data.user.name,
					headimg:data.user.headimg
				})
			}
		});
		setTimeout(function(){
			if(that.state.user == ''){
				location.hash = '/';
			}
		},200)
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