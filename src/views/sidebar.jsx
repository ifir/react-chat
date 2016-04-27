var React = require('react');
//组件
var Search = require('../components/search.jsx');
var List = require('../components/list.jsx');

module.exports = React.createClass({
	getInitialState() {
	    var userList = [
	    	{
	    		headimg:'./img/h2.png',
	    		name:'React',
	    		shownum:true,
	    		msgnum:2,
	    		active:'active'
	    	},
	    	{
	    		headimg:'./img/h3.png',
	    		name:'Webpack',
	    		shownum:false,
	    		msgnum:0,
	    		active:''
	    	}
	    ];
	    return {
	    	userList : userList
	    }
	},
	render:function(){
		return (
			<div className="sidebar">
				<Search />
				<List userList={this.state.userList} />
			</div>
		)
	}
})