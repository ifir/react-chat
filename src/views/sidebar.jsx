var React = require('react');
//组件
var Search = require('../components/search.jsx');
var List = require('../components/list.jsx');

module.exports = React.createClass({
	render:function(){
		return (
			<div className="sidebar">
				<Search />
				<List />
			</div>
		)
	}
})