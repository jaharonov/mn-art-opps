var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var GrantSchema = new Schema({
    name: String,
    text: String,
    deadline: Date,
    location: String,
    url: String,
    imageurl: String
});

module.exports = mongoose.model('Grant', GrantSchema);