var mongoose = require('mongoose');

var msgSchema = new mongoose.Schema({
	//name : { type : String }, //属性name,类型为String
    headimg : { type : String },
    time : { type : String },
    text : {type : String},
    myself:{type : Boolean}
})

module.exports = mongoose.model('message', msgSchema);