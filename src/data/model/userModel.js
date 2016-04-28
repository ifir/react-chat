var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name:{
		type:String,
		unique: true   //设置参数名唯一
	},
	password : { type : String },
    headimg : { type : String }
})

module.exports = mongoose.model('user', userSchema);