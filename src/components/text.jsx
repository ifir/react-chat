var React = require('react');
var ReactDOM = require('react-dom');
module.exports = React.createClass({
	handleSubmit:function(){
		var val = ReactDOM.findDOMNode(this.refs.msg).value;
		var newMsg = {
			time:'8:00',
			myself:true,
			headimg:'dist/img/h1.png',
			text: val
		}
		ReactDOM.findDOMNode(this.refs.msg).value = '';
		this.props.onNewMsg( newMsg );
	},
	render: function(){
		return (
			<div className="enter-text">
				<textarea ref="msg" className="textarea" placeholder="按 Ctrl + Enter 发送" maxlength="100"></textarea>
				<input onClick={this.handleSubmit} className="btn btn-enter" type="button" value="发送"/>
			</div>
		)
	}
})