// Iteration 3: import tweets data
const tweetsData = require('../data/tweets')

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  // Order tweets desc by date

  const user = req.query.user
  let tweets;
  if (user) {
    tweets = tweetsData.filter((tweet) => tweet.user.includes(user))
  } else { 
    tweets = tweetsData
  };

  tweetsData.sort((tweet1, tweet2) =>
    tweet2.createdAt - tweet1.createdAt);
  res.render('tweets/tweets', {
    tweetsList: tweetsData
  });
  // Iteration 4: filter tweets by user checking the query param 'name'
}



// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {
  /*const {tweeter-user} = req.query
  res.send
  tweetsData.create(req.body)
    .then(res.render('tweets/tweets'), {
      tweetsData
    });
    console.log(tweetsData)*/
}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
