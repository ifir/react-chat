var React = require('react');
var socket = require('socket.io-client')('http://localhost:3000');
//组件
var Search = require('../components/search.jsx');
var List = require('../components/list.jsx');


module.exports = React.createClass({
	render:function(){
		return (
			<div className="sidebar">
				<Search />
				<List userList={this.props.userList} />
			</div>
		)
	}
})


// var userList = [
// 	    	{
// 	    		headimg:'./img/h2.png',
// 	    		name:'React',
// 	    		shownum:true,
// 	    		msgnum:2,
// 	    		active:'active'
// 	    	},
// 	    	{
// 	    		headimg:'./img/h3.png',
// 	    		name:'Webpack',
// 	    		shownum:false,
// 	    		msgnum:0,
// 	    		active:''
// 	    	}
// 	    ];