var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var socket = require('socket.io-client')('http://localhost:3000');


module.exports = React.createClass({
	getInitialState:function() {
	return {
		  headimg:''
		}
	},
	handleChange:function(){
		var date = new Date();
		var nowTime = date.getHours()+':'+date.getMinutes();
		var dom =ReactDOM.findDOMNode(this.refs.img);
		var that = this;
		if(dom.files.length != 0){
	  		var file = dom.files[0];
	  		reader = new FileReader();
	  		if(!reader){
	  			alert("!your browser doesn\'t support fileReader");
	  			return;
	  		}
	  		reader.onload = function(e){
	  			//console.log(e.target.result);
	  			var msgObj = {
	  				img:e.target.result
	  			};
	  			var newMsg = {
					time:nowTime,
					myself:true,
					headimg:'img/h1.png',
					text: '',
					img:e.target.result
				}
	  			socket.emit('sendimg',newMsg);
	  			that.props.onNewMsg( newMsg );
	  			console.log(msgObj.img)
	  		};
	  		reader.readAsDataURL(file);
	  	}
	},
	componentDidMount:function() {
		//字体颜色切换
		$('.icon-type').on('click', function(e){
			e.stopPropagation();
	      	$('.text-change').show();
	      	$('.bg-change').hide();
		})
		$('.font-size a').each( function(index){
      		$(this).click(function(e){
      			e.stopPropagation();
      			var num = index + 1;
      			$('.font-size a').removeClass('cur');
      			$(this).addClass('cur');
      			$('.show-message').removeClass('fontsize1 fontsize2 fontsize3');
      			$('.show-message').addClass('fontsize'+num);
      		})
	    })
	    $('.font-color a').each( function(index){
      		$(this).click(function(e){
      			e.stopPropagation();
      			var num = index + 1;
      			$('.font-color a').removeClass('cur');
      			$(this).addClass('cur');
      			$('.show-message').removeClass('font-color1 font-color2 font-color3');
      			$('.show-message').addClass('font-color'+num);
      		})
	    })
		//背景切换
	      $('.icon-cog').on('click', function(e){
	      		e.stopPropagation();
	      		$('.bg-change').show();
	      		$('.text-change').hide();
	      })
	      $('.bg-change a').each( function(index){
	      		$(this).click(function(){
	      			var num = index + 1;
	      			$('.bg-change a').removeClass('cur');
	      			$(this).addClass('cur');
	      			$('#chat').removeClass('bg1 bg2 bg3');
	      			$('#chat').addClass('bg'+num);
	      		})
	      })
	      $(document).on('click', function(){
	      		$('.bg-change, .text-change').hide();
	      })
	      $('.bg-change, .text-change').on('click', function(e){
	      		e.stopPropagation();
	      })

	},
	render:function(){
		return (
			<div className="tools">
				<i className="icon icon-type">
				</i>
				<div className="text-change">
					<div className="font-size">
						<p>字体大小</p>
						<a href="javascript:;" className="cur font12">12号(默认)</a>
						<a href="javascript:;" className="font16">16号</a>
						<a href="javascript:;" className="font20">20号</a>
					</div>
					<div className="font-color">
						<p>字体颜色</p>
						<a href="javascript:;" className="cur black"></a>
						<a href="javascript:;" className="pink"></a>
						<a href="javascript:;" className="purple"></a>
					</div>
					</div>
				<i className="icon icon-image">
					<input onChange={this.handleChange} ref="img" className="file" type="file" />
				</i>
				<i className="icon icon-cog">
					<div className="bg-change">
						<a className="cur" href="javascript:;">背景1(默认)</a>
						<a href="javascript:;">背景2</a>
						<a href="javascript:;">背景3</a>
					</div>
				</i>
			</div>
		)
	}
})