var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://127.0.0.1:27017/angular_mongo');
var db = mongoose.connection;

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// Schema 结构
var userSchema = new mongoose.Schema({
    id        : { type : Number },
    name      : { type : String, required: true},
    password  : { type : String, required: true},
    address   : { type : String },
    age       : { type : Number },
    time      : { type : Date,  default: Date.now}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);