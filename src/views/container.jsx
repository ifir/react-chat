var React = require('react');
//视图
var Home = require('./home.jsx');
var Chat = require('./chat.jsx');
var Login = require('./login.jsx');
var Register = require('./register.jsx');
var Remind = require('../components/remind.jsx');
var socket = require('socket.io-client')('http://localhost:3000');

module.exports = React.createClass({
	getInitialState:function() {
	return {
		  route: window.location.hash.substr(1),
		  name: '',
		  headimg:'',
		  show: false
		}
	},
	componentDidMount:function() {
		var that = this;
		window.addEventListener('hashchange', function(){
		  that.setState({
		    route: window.location.hash.substr(1)
		  })
		})
		socket.on('loginInfo', function(msg){
			that.setState({
				name:msg[0],
				headimg:msg[1],
				show:true
			})
			setTimeout(function(){
				that.setState({	
					show:false
				})
			},5000)
		})
		
	},
	render:function(){
		var  Child = null;
	    switch (this.state.route) {
	      case '/login': Child = Login; break;
	      case '/register': Child = Register; break;
	      case '/chat': Child = Chat; break;
	      default:      Child = Home;
	    }
		return (
			<div>
				<Child />
				<Remind show={this.state.show} name={this.state.name} headimg={this.state.headimg}/>
			</div>
		)
	}
})