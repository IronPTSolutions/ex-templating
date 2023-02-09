const User = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

module.exports.create = (req, res) => {
  res.render("users/new");
};

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render("users/new", { errors: err.errors, user: req.body });
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res) => {
  res.render("users/login");
};

const sessions = {};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((ok) => {
          if (ok) {
            req.session.userId = user.id;
            res.redirect("/tweets");
          }
        })
        .catch(next);
    })
    .catch(next);
};
