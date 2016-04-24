var mongoose = require('mongoose');

var msgSchema = new mongoose.Schema({
	name : { type : String }, //属性name,类型为String
    headimg : { type : String },
    time : { type:Date, default:Date.now },
    text : {type : String},
    myself:{type : Boolean}
})