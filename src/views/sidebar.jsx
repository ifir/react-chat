var React = require('react');
//组件
var List = require('../components/list.jsx');

module.exports = React.createClass({
	render:function(){
		return (
			<div className="sidebar">
				<div className="headpic">
					<img src="../assets/img/h1.png" alt="头像" />
					<span>FIR</span>
				</div>
				<div className="search"></div>
				<List />
			</div>
		)
	}
})