const express = require("express");

const multer = require('../config/multer.config');
const secure = require('../middlewares/secure.mid');
const common = require("../controllers/common.controller");
const tweets = require("../controllers/tweets.controller");
const users = require("../controllers/users.controller");

const router = express.Router();

router.get("/", common.home);

router.get("/users/new", users.create);
router.post("/users", users.doCreate);

router.get("/login", users.login);
router.post("/login", users.doLogin);

router.get("/tweets", tweets.list);

router.get("/tweets/new", secure.isAuthenticated, tweets.create);
router.post("/tweets", secure.isAuthenticated, multer.single('image'), tweets.doCreate);

router.get("/tweets/:id", tweets.detail);
router.get("/tweets/:id/update", tweets.update);
router.post("/tweets/:id", tweets.doUpdate);
router.post("/tweets/:id/delete", secure.isAuthenticated, tweets.delete);

module.exports = router;
