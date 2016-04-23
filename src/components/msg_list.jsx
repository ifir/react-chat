var React = require('react');

module.exports = React.createClass({
	render:function(){
		var myself = this.props.myself ? 'msg-info me' : 'msg-info';
		return (
			<li onClick={this.handleClick}>
				<p className="time">
					<span>{this.props.time}</span>
				</p>
				<div className={myself}>
					<img src={this.props.headimg} alt="头像" />
					<div className="msg-text">
						{this.props.text}
					</div>
				</div>
			</li>
		)
	}
})