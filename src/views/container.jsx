var React = require('react');
//视图
var Home = require('./home.jsx');
var Chat = require('./chat.jsx');
var Login = require('./login.jsx');
var Register = require('./register.jsx');
var Remind = require('../components/remind.jsx');


module.exports = React.createClass({
	getInitialState:function() {
	return {
		  route: window.location.hash.substr(1)
		}
	},
	componentDidMount:function() {
		var that = this;
		window.addEventListener('hashchange', function(){
		  that.setState({
		    route: window.location.hash.substr(1)
		  })
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
				<Remind />
			</div>
		)
	}
})