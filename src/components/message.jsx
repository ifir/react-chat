var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="show-message">
					<ul>
						<li>
							<p className="time">
								<span>20:00</span>
							</p>
							<div className="msg-info">
								<img src="dist/img/h3.png" alt="头像" />
								<div className="msg-text">
									Hello，这是一个基于React + Webpack构建的简单chat示例，聊天记录保存在mongodb。简单演示了React的基础特性和webpack配置。
								</div>
							</div>
						</li>

						<li>
							<p className="time">
								<span>20:00</span>
							</p>
							<div className="msg-info me">
								<img src="dist/img/h1.png" alt="头像" />
								<div className="msg-text">
									Hello，
								</div>
							</div>
						</li>
					</ul>
				</div>
		)
	}
})