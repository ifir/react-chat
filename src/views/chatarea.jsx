var React = require('react');
//组件
var Message = require('../components/message.jsx');
var Tools = require('../components/tools.jsx');
var Text = require('../components/text.jsx');

module.exports = React.createClass({
	getInitialState:function() {
		var msgArray=[
			{
				time:'20:00',
				myself:'msg-info',
				headimg:'dist/img/h3.png',
				text:'Hello，这是一个基于React + Webpack构建的简单chat示例，聊天记录保存在mongodb。简单演示了React的基础特性和webpack配置。'
			},
			{
				time:'22:00',
				myself:'msg-info me',
				headimg:'dist/img/h1.png',
				text:'Hello'
			}
		]
	    return {
	          msgArray:msgArray
	    };
	},
	render:function(){
		return (
			<div className="chatarea">
				<Message msgArray={this.state.msgArray} />
				<Tools />
				<Text msgArray={this.state.msgArray} />
			</div>
		)
	}
})