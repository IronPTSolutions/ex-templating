const Tweet = require("../models/tweet.model");

module.exports.list = (req, res) => {
  Tweet.find()
    .then((tweets) => {
      res.render("tweets/list", { tweets });
    })
    .catch();
};

module.exports.detail = (req, res) => {
  Tweet.findById(req.params.id)
    .then((tweet) => {
      res.render("tweets/detail", { tweet });
    })
    .catch();
};

module.exports.create = (req, res) => {
  res.render("tweets/new");
};

module.exports.doCreate = (req, res, next) => {
  Tweet.create(req.body)
    .then(() => {
      res.redirect("/tweets");
    })
    .catch(next);
};

module.exports.update = (req, res) => {
  Tweet.findById(req.params.id)
    .then((tweet) => {
      res.render("tweets/edit", { tweet });
    })
    .catch();
};

module.exports.doUpdate = (req, res) => {
  Tweet.findByIdAndUpdate(req.params.id, req.body)
    .then((tweet) => {
      res.redirect("/tweets");
    })
    .catch();
};

module.exports.delete = (req, res) => {
  Tweet.findByIdAndDelete(req.params.id)
    .then((tweet) => {
      res.redirect("/tweets");
    })
    .catch();
};
