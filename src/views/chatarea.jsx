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
				myself:false,
				headimg:'dist/img/h3.png',
				text:'Hello，这是一个基于React + Webpack构建的简单chat示例，聊天记录保存在mongodb。简单演示了React的基础特性和webpack配置。'
			},
			{
				time:'22:00',
				myself:true,
				headimg:'dist/img/h1.png',
				text:'Hello'
			}
		]
	    return {
	          msgArray:msgArray
	    };
	},
	onNewMsg:function(newMsg){
		var newMsgArray = this.state.msgArray.concat(newMsg);
		this.setState({
			msgArray : newMsgArray
		})
	},
	render:function(){
		return (
			<div className="chatarea">
				<Message msgArray={this.state.msgArray} />
				<Tools />
				<Text onNewMsg={this.onNewMsg} />
			</div>
		)
	}
})