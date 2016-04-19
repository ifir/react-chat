var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="enter-text">
				<textarea className="textarea" placeholder="按 Ctrl + Enter 发送" maxlength="100"></textarea>
				<input className="btn btn-enter" type="button" value="发送"/>
			</div>
		)
	}
})