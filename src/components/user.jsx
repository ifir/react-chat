var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<li className={this.props.active} onClick={this.props.handleClick}>
				<img src={this.props.headimg} alt="头像" />
				<span>{this.props.name}</span>
			</li>
		)
	}
})