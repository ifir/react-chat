var mongoose = require("mongoose");

var TestSchema = new mongoose.Schema({
    name : { type : String }, //属性name,类型为String
    headimg : { type : String },
    shownum : {type : Boolean},
    msgnum : {type : Number}
});