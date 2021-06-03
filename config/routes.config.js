const express = require('express');

// Iteration 1: import common controller
const controller = require('../controllers/common.controller')
// Iteration 3: import tweets controller
const tweets = require('../controllers/tweets.controller')

const router = express.Router();

// Iteration 1: link GET '/' with common controller home
router.get('/', controller.home);

// Iteration 3: link GET '/tweets' with tweets controller list
router.get('/tweets', tweets.list);
// Iteration 4: link POST '/tweets' with tweets controller create
router.post('/tweets', tweets.create);
router.get('/tweets/:name', tweets.list)
// Iteration 5: link POST '/tweets/:id/delete' with tweets controller delete


module.exports = router;
