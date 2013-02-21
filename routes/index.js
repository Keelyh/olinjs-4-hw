/*
 * GET home page.
 */
var models = require('../models/models');

exports.index = function(req, res){
  var tweets = models.Tweet.find().sort('-_id').populate('_user').exec(function(err, docs) {
  	if (err) return console.log("cannot find tweets", err);
  	res.render('index', { title: 'Welcome to Crappy Twitter', tweets: docs});
  });  
};

exports.partial = function(req, res){
  console.log("partial function");
  var tweets = models.Tweet.find().sort('-_id').populate('_user').exec(function(err, docs) {
  	if (err) return console.log("cannot find tweets", err);
    console.log("inside partial");
  	res.render('_tweets', { title: '', tweets: docs});
  });  
};

exports.tweet = function(req, res){
	console.log("tweet func called");
	var newtweet = new models.Tweet({_user: req.session.user._id, text: req.body.message});
	newtweet.save(function(err){
		if (err) return ("error saving tweet", err);
		//res.render('_tweets', {tweets: docs});
		res.redirect("/");
	});
};
