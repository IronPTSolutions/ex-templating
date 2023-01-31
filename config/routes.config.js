const express = require("express");

// Iteration 1: import common controller
const common = require("../controllers/common.controller");

// Iteration 3: import tweets controller
const tweets = require("../controllers/tweets.controller");

const router = express.Router();

// Iteration 1: link GET '/' with common controller home
router.get("/", common.home);

router.get("/tweets", tweets.list);
router.get("/tweets/new", tweets.create);
router.post("/tweets", tweets.doCreate);
router.get("/tweets/:id", tweets.detail);
router.get("/tweets/:id/update", tweets.update);
router.post("/tweets/:id", tweets.doUpdate);
router.post("/tweets/:id/delete", tweets.delete);

module.exports = router;
