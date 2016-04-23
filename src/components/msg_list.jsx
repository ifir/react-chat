var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<li key={this.props.keys}>
				<p className="time">
					<span>{this.props.time}</span>
				</p>
				<div className={this.props.myself}>
					<img src={this.props.headimg} alt="头像" />
					<div className="msg-text">
						{this.props.text}
					</div>
				</div>
			</li>
		)
	}
})