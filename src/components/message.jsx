var React = require('react');
var Msglist = require('./msg_list.jsx');

module.exports = React.createClass({
	render: function(){
		var msgArrays = this.props.msgArray;
		var msglists = msgArrays.map(function(data, index){
			return (
				<Msglist
					key={index}
					time={data.time}
					text={data.text}
					headimg={data.headimg}
					myself={data.myself}
				/>
			)
		})
		return (
			<div className="show-message">
					<ul>
						{msglists}
					</ul>
				</div>
		)
	}
})