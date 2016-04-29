var React = require('react');
var socket = require('socket.io-client')('http://localhost:3000');
var reqwest = require('reqwest');
module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<div className="headpic">
					<span>在线成员列表</span>
				</div>
				{
					//<div className="search">
					//<input className="search-input" type="text" placeholder="search user..."/>
					//<i className="icon icon-search"></i>
					//</div>
				}
			</div>
		)
	}
})