//样式
require("./assets/scss/style.scss");


var React = require('react');
var ReactDOM = require('react-dom'); //render react
//视图
var Con = require('./views/container.js');



ReactDOM.render(
 <Con />, document.getElementById('chat')
);