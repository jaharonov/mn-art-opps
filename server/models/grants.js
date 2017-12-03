var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema

var ReviewSchema = new Schema({
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    text: String
});

var RatingSchema = new Schema({
    userId: Schema.Types.ObjectId,
    number: Number
});
var GrantSchema = new Schema({
    name: String,
    text: String,
    deadline: Date,
    location: String,
    url: String,
    imageurl: { type: String, default: 'http://www.supercoloring.com/sites/default/files/silhouettes/2015/05/minnesota-map-cyan-silhouette.svg' },
    review: [ReviewSchema],
    rating: [RatingSchema]
});

module.exports = mongoose.model('Grant', GrantSchema);