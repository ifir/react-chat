var React = require('react');
//视图
var Sidebar = require('./sidebar.jsx');
var Chatarea = require('./chatarea.jsx');
var Remind = require('../components/remind.jsx');


module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<div className="chat-box">
					<Sidebar />
					<Chatarea />
				</div>
				<Remind />
			</div>
		)
	}
})