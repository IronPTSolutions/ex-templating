require("../config/db.config");

const Tweet = require("../models/tweet.model");

Tweet.deleteMany().then(() => {
  const tweets = [];
  for (let i = 0; i < 100; i++) {
    tweets.push({
      message: `message ${i}`,
      user: `user${i}`,
    });
  }

  Tweet.create(tweets).then(() => {
    console.log("tweets created");
  });
});
