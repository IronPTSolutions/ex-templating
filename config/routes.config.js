const express = require('express');
const router = express.Router();

// Iteration 1: import common controller
const commons = require('../controllers/common.controller');

// Iteration 3: import tweets controller
const tweets = require('../controllers/tweets.controller')

// Iteration 1: link GET '/' with common controller home
router.get('/', commons.home)

// Iteration 3: link GET '/tweets' with tweets controller list
router.get('/tweets', tweets.list)


// Iteration 5: link POST '/tweets' with tweets controller create


// Iteration 6: link POST '/tweets/:id/delete' with tweets controller delete

module.exports = router;
