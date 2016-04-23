var React = require('react');
var User = require('./user.jsx');

module.exports = React.createClass({
	render:function(){
		var listArray = this.props.userList;
		var lists = listArray.map(function(data, index){
			return (
				<User
					key={index}
					headimg = {data.headimg}
					name = {data.name}
					shownum = {data.shownum}
					msgnum = {data.msgnum}
					active = {data.active}
				/>
			)
		})
		return (
			<div className="list-box">
				<ul>
					{lists}
				</ul>
			</div>
		)
	}
})
