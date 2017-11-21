var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var ResidencySchema = new Schema({
    name: String,
    text: String,
    deadline: Date,
    location: String,
    url: String,
    imageurl: String
});

module.exports = mongoose.model('Residency', ResidencySchema);