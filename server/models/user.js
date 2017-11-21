var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// Mongoose Schema
var ReviewSchema = new Schema ({
    name: String,
    text: String
});

var RatingSchema = new Schema({
    name: String,
    number: Number
});

var TodoSchema = new Schema({ 
    name: String,
    deadline: Date,
    complete: Boolean
});


var UserSchema = new Schema({
    username: String,
    password: String,
    reviews:  [ReviewSchema],
    ratings:  [RatingSchema],
    todos:    [TodoSchema]

});

// Called before adding a new user to the DB. Encrypts password.
UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) {
      return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) {
          return next(err);
        }

        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
              return next(err);
            }
            //IF WE WERE TO CONSOLE LOG RIGHT MEOW, user.password would be 12345
            user.password = hash;
            next();
        });
    });
});

// Used by login methods to compare login form password to DB password
UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    // 'this' here refers to this instance of the User model
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {
          return callback(err);
        }

        callback(null, isMatch);
    });
};


module.exports = mongoose.model('User', UserSchema);
