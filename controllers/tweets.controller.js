const Tweet = require("../models/tweet.model");
const User = require('../models/user.model');
const mongoose = require("mongoose");

module.exports.list = (req, res, next) => {
  const { lat, lng, search, user } = req.query;
  const criterial = {};

  if (user) {
    criterial.user = user;
  }

  if (search) {
    criterial.message = new RegExp(search);
  }

  if (lat && lng ) {
    criterial.location = {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat]
        },
        $maxDistance: 7000
     }
    }
  }

  Tweet.find(criterial)
    .populate('user')
    .sort({ createdAt: req.query.sort || "desc" })
    .then((tweets) => res.render("tweets/list", { tweets }))
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
  const { lat, lng } = req.body;
  
  const tweet = req.body;
  tweet.user = req.user.id;
  
  if (req.file) {
    tweet.image = req.file.path;
  }

  if (lat && lng) {
    tweet.location = {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }

  Tweet.create(tweet)
    .then(() => res.redirect("/tweets"))
    .catch((err) => {
      console.log(err);
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
