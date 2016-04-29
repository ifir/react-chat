var React = require('react');
var ReactDOM = require('react-dom');
var socket = require('socket.io-client')('http://localhost:3000');


module.exports = React.createClass({
	getInitialState:function() {
	return {
		  headimg:''
		}
	},
	handleChange:function(){
		var date = new Date();
		var nowTime = date.getHours()+':'+date.getMinutes();
		var dom =ReactDOM.findDOMNode(this.refs.img);
		var that = this;
		if(dom.files.length != 0){
	  		var file = dom.files[0];
	  		reader = new FileReader();
	  		if(!reader){
	  			alert("!your browser doesn\'t support fileReader");
	  			return;
	  		}
	  		reader.onload = function(e){
	  			//console.log(e.target.result);
	  			var msgObj = {
	  				img:e.target.result
	  			};
	  			var newMsg = {
					time:nowTime,
					myself:true,
					headimg:'img/h1.png',
					text: '',
					img:e.target.result
				}
	  			socket.emit('sendimg',newMsg);
	  			that.props.onNewMsg( newMsg );
	  			console.log(msgObj.img)
	  		};
	  		reader.readAsDataURL(file);
	  	}
	},
	render:function(){
		return (
			<div className="tools">
				<i className="icon icon-type"></i>
				<i className="icon icon-image">
					<input onChange={this.handleChange} ref="img" className="file" type="file" />
				</i>
				<i className="icon icon-cog"></i>
			</div>
		)
	}
})