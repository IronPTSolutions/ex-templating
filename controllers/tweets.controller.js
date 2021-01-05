// Iteration 3: import tweets data
const tweetDB = require('../data/tweets');
const uuid = require('uuid');

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  const { user } = req.query;
  const tweets = tweetDB
    .filter(tweet => user ? tweet.user.includes(user) : true)
    .sort((t1, t2) => t2.createdAt - t1.createdAt);

    res.render('tweets/list', {
      tweets: tweets,
      user: user
    });
}
  // Order tweets desc by date
  // Iteration 4: filter tweets by user checking the query param 'name'

module.exports.fav = (req, res, next) => {
  const { id } = req.params;
  const tweet = tweetsDB.find(tweet => tweet.id === id);
  if (tweet) {
    tweet.fav = !tweet.fav
  }
  res.redirect('/tweets');
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {
  const { user, message } = req.body;
  const errors = {}
  if (!user) {
    errors.user = 'Username is mandatory';
  }
  if (!message) {
    errors.message = 'Message is mandatory';
  }
  if (Object.keys(errors).length > 0) {
    // There are errors => show errors at the form
    res.status(400)
    .render('tweets/list', {
      tweet: req.body,
      errors: errors
    });
  } else {
    // No errors => create tweet & redirect to tweet list
    tweetsDB.push({
      id: uuid.v4().toString(),
      user: user,
      message: message,
      createdAt: new Date()
    })
    res.redirect('/tweets');
  }
}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {
  const { id } = req.params;
  const tweet = tweetDB.find(tweet => tweet.id === id);
  if (tweet) {
    tweet.delete = !tweet.delete
  }
  res.redirect('/tweets');
}
