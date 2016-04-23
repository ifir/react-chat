var React = require('react');
var User = require('./user.jsx');

module.exports = React.createClass({
	getInitialState:function() {
	    return {
	        currentIndex:'',
	    };
	},
	handleClick:function(index){
        this.setState({
            currentIndex:index //由map循环传递的index
        });
    },
	render:function(){
		var listArray = this.props.userList;
		var lists = listArray.map(function(data, index){
			var cn = index === this.state.currentIndex ? 'active' : '';
			return (
				<User
					key={index}
					headimg = {data.headimg}
					name = {data.name}
					shownum = {data.shownum}
					msgnum = {data.msgnum}
					active={cn}
					handleClick={this.handleClick.bind(this,index)}
				/>
			)
		}.bind(this))
		return (
			<div className="list-box">
				<ul>
					{lists}
				</ul>
			</div>
		)
	}
})
