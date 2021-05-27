// Iteration 3: import tweets data
const tweetsData = require('../data/tweets')

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  const tweets = tweetsData.list();
  // Order tweets desc by date
  tweets.sort((tweet1, tweet2) =>{
    return tweet2.createdAt - tweet1.createdAt
  });
  res.render('tweets/tweets', { tweets });
  
  // Iteration 4: filter tweets by user checking the query param 'name'
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
