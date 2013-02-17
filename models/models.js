var mongoose = require('mongoose');
var schema = mongoose.Schema({ name: String});
var User = mongoose.model('User', schema);

var Tweetschema = mongoose.Schema({_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, text: String})
var Tweet = mongoose.model('Tweet', Tweetschema)

exports.User = User;
exports.Tweet = Tweet;