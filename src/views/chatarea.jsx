var React = require('react');
//组件
var Message = require('../components/message.jsx');
var Tools = require('../components/tools.jsx');
var Text = require('../components/text.jsx');

module.exports = React.createClass({
	render:function(){
		return (
			<div className="chatarea">
				<Message />
				<Tools />
				<Text />
			</div>
		)
	}
})