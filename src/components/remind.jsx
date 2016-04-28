var React = require('react');

module.exports = React.createClass({
	render:function(){
		var display = this.props.show ? 'remind-box show' : 'remind-box';
		return (
			<div className={display}>
				<img src={this.props.headimg} alt="头像" />
				<span>{this.props.name}</span>
			</div>
		)
	}
})