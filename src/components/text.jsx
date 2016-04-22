var React = require('react');
var ReactDOM = require('react-dom');
module.exports = React.createClass({
	getInitialState() {
	    return {
	          msgValue: ''
	    };
	},
	handleSubmit:function(){
		
	},
	handleChange:function(){
		this.setState({
			msgValue: ReactDOM.findDOMNode(this.refs.msg).value
		})
		console.log(this.state.msgValue)
	},
	render: function(){
		return (
			<div className="enter-text">
				<textarea onChange={this.handleChange} ref="msg" defaultValue={this.state.msgValue} className="textarea" placeholder="按 Ctrl + Enter 发送" maxlength="100"></textarea>
				<input onClick={this.handleSubmit} className="btn btn-enter" type="button" value="发送"/>
			</div>
		)
	}
})