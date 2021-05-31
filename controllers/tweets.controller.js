// Iteration 3: import tweets data
const tweetsData = require('../data/tweets')

// Iteration 3: list tweets from file


module.exports.list = (req, res, next) => {
  // Order tweets desc by date
 const user = req.query.user;
 let tweets;

 if(user){
   tweets = tweetsData.filter((tweet) => tweet.user.toLowerCase().includes(user))
 } else {
   tweets = tweetsData
 }

 tweets.sort((a, b) => b.createdAt - a.createdAt);
 res.render('tweets/list', {
   tweets, 
   title: 'People are saying...',
   user: user})
  // Iteration 4: filter tweets by user checking the query param 'name'
  
  
    
  
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {
  const user = req.body.userform;  
  const message = req.body.message;
  const errors = {};
  if (!user) {
    errors.user = 'User is required';
  }
  if (!message) {
    errors.message = 'Message is required';

  }if (Object.keys(errors).length > 0) {
    res.status(400)
      .render('tweets/list', {
       user: user,
       message: message,
        errors: errors
      })}
      
      else{

    tweetsData.push({
    //id: tweetsData.uuid.v4().toString(),
    user:user, 
    message:message,
    createdAt:new Date}

    
  )};
  console.log(tweetsData)
  res.redirect('/tweets')

}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
