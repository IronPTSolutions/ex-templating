const express = require("express");

const common = require("../controllers/common.controller");
const tweets = require("../controllers/tweets.controller");
const users = require("../controllers/users.controller");

const router = express.Router();

router.get("/", common.home);

router.get("/users/new", users.create);
router.post("/users", users.doCreate);

router.get("/tweets", tweets.list);
router.get("/tweets/new", tweets.create);
router.post("/tweets", tweets.doCreate);
router.get("/tweets/:id", tweets.detail);
router.get("/tweets/:id/update", tweets.update);
router.post("/tweets/:id", tweets.doUpdate);
router.post("/tweets/:id/delete", tweets.delete);

module.exports = router;
