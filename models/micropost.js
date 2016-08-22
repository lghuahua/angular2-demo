var mongoose        =  require('mongoose');
var uniqueValidator =  require('mongoose-unique-validator');

// Schema 结构
var micropostSchema = new mongoose.Schema({
    content   : { type : String, required: true},
    time      : { type : Date,  default: Date.now},
    user_id   : { type : String, ref: 'User'}
});

micropostSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Micropost', micropostSchema);