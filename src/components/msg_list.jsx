var React = require('react');

module.exports = React.createClass({
	render:function(){

		var myself = this.props.myself  ? 'msg-info me' : 'msg-info';
		var display = this.props.img = '' ? 'none' : 'block';
		return (
			<li onClick={this.handleClick}>
				<p className="time">
					<span>{this.props.time}</span>
				</p>
				<div className={myself}>
					<img src={this.props.himg} alt="头像" />
					<div className="msg-text">
						{this.props.text}
						<img style={{display:display}} src={this.props.img} alt="" />
					</div>
				</div>
			</li>
		)
	}
})