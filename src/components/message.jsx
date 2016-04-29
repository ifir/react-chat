var React = require('react');
var Msglist = require('./msg_list.jsx');

module.exports = React.createClass({
	render: function(){
		var that = this;
		var msgArrays = this.props.msgArray;
		var msglists = msgArrays.map(function(data, index){
			console.log('data.user='+data.user)
			return (
				<Msglist
					key={index}
					time={data.time}
					text={data.text}
					himg={data.headimg}
					img={data.img}
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