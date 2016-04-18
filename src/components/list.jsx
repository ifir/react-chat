var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<div className="list-box">
				<ul>
					<li className="active">
						<img src="dist/img/h2.png" alt="头像" />
						<span>React</span>
					</li>
					<li>
						<img src="dist/img/h3.png" alt="头像" />
						<span>Webpack</span>
					</li>
				</ul>
			</div>
		)
	}
})
