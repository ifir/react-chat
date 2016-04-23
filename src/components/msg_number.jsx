var React = require('react');

module.exports = React.createClass({
	render:function(){
		var display = this.props.shownum ? 'block' : 'none';
		return (
			<div className="msg-number" style={{display:display}}>
				{this.props.msgnum}
			</div>
		)
	}
})