var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<div className="headpic">
					<img src="../dist/img/h1.png" alt="头像" />
					<span>FIR</span>
				</div>
				<div className="search">
					<input className="search-input" type="text" placeholder="search user..."/>
					<i className="icon icon-search"></i>
				</div>
			</div>
		)
	}
})