var React = require('react');
var Msgnum = require('./msg_number.jsx');

module.exports = React.createClass({
	render:function(){
		return (
			<li className={this.props.active}>
				<img src={this.props.headimg} alt="头像" />
				<span>{this.props.name}</span>
				<Msgnum shownum={this.props.shownum}/>
			</li>
		)
	}
})