//样式
require('./normalize.scss');
require('./container.scss');

var React = require('react');
//组件
var List = require('../components/list.js');

module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<h1>hello react</h1>
				<p>你好</p>
				<h3>呵呵!!</h3>
				<List />
			</div>
		)
	}
})