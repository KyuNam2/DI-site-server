var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true}
})