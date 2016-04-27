var React = require('react');
var ReactDOM = require('react-dom'); //render react

//视图
var Con = require('./views/container.jsx');

ReactDOM.render(
 <Con />, document.getElementById('chat')
);