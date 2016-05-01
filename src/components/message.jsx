var React = require('react');
var Msglist = require('./msg_list.jsx');

module.exports = React.createClass({
	render: function(){
		var that = this;
		var msgArrays = this.props.msgArray;
		var msglists = msgArrays.map(function(data, index){
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
			<div className="show-message fontsize1 font-color1">
					<ul>
						{msglists}
					</ul>
				</div>
		)
	}
})