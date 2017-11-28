var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema

var ReviewSchema = new Schema({
    userId: Schema.Types.ObjectId,
    name: String,
    text: String
});

var RatingSchema = new Schema({
    userId: Schema.Types.ObjectId,
    name: String,
    number: Number
});
var GrantSchema = new Schema({
    name: String,
    text: String,
    deadline: Date,
    location: String,
    url: String,
    imageurl: String,
    review: [ReviewSchema],
    rating: [RatingSchema]
});

module.exports = mongoose.model('Grant', GrantSchema);