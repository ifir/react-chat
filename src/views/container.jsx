var React = require('react');
//视图
var Sidebar = require('./sidebar.jsx');
var Chatarea = require('./chatarea.jsx');


module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<Sidebar />
				<Chatarea />
			</div>
		)
	}
})