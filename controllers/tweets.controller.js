// Iteration 3: import tweets data
const tweets = require('../data/tweets')

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  res.render('tweets/list', {tweets:tweets})
}
  // Order tweets desc by date
  module.exports.list = (req, res, next) => {
    tweets.sort((t1, t2) => t2.createdAt - t1.createdAt)
    res.render('tweets/list', {tweets: tweets})
}

  // Iteration 4: filter tweets by user checking the query param 'name'


// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
