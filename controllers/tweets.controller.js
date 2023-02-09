const Tweet = require("../models/tweet.model");
const User = require('../models/user.model');
const mongoose = require("mongoose");

module.exports.list = (req, res, next) => {
  const criteria = {};

  if (req.query.user) {
    criteria.user = req.query.user;
  }

  if (req.query.search) {
    criteria.message = new RegExp(req.query.search);
  }

  Tweet.find(criteria)
    .populate('user')
    .sort({ createdAt: req.query.sort || "desc" })
    .then((tweets) => res.render("tweets/list", { tweets, query: req.query }))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Tweet.findById(req.params.id)
    .populate('user')
    .then((tweet) => res.render("tweets/detail", { tweet }))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  res.render("tweets/new");
};

module.exports.doCreate = (req, res, next) => {
  req.body.user = req.user.id;
  Tweet.create(req.body)
    .then(() => {
      res.redirect("/tweets");
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render("tweets/new", { errors: err.errors, tweet: req.body });
      } else {
        next(err);
      }
    });
};

module.exports.update = (req, res, next) => {
  Tweet.findById(req.params.id)
    .then((tweet) => {
      res.render("tweets/edit", { tweet });
    })
    .catch(next);
};

module.exports.doUpdate = (req, res, next) => {
  Tweet.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then((tweet) => {
      res.redirect("/tweets");
    })
    .catch((err) => {
      // TODO
      next(err);
    });
};

module.exports.delete = (req, res, next) => {
  Tweet.findById(req.params.id)
    .then(tweet => {
      if (!tweet) {
        res.redirect("/tweets")
      } else if (tweet.user == req.user.id) {
        console.log('deleting tweet');
        tweet.delete()
          .then(() => res.redirect("/tweets"))
          .catch(next)
      } else {
        res.redirect("/tweets")
      }
    })
    .catch(next);
};
