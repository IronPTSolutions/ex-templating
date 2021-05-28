// Iteration 3: import tweets data
const tweets = require('../data/tweets')
// Iteration 3: list tweets from file


module.exports.list = (req, res, next) => {
  // Order tweets desc by date
  tweets.sort((a , b) => b.createdAt - a.createdAt);

  if(req.query.user){
    res.render('tweets', {
      tweetsList: tweets.filter((tweet) => tweet.user === req.query.user),
      user: req.query.user} );
  } 
  // Iteration 4: filter tweets by user checking the query param 'name'
  
  else{
    res.render('tweets', {
      tweetsList: tweets,})
  }
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {
  
}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
