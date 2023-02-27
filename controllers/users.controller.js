const User = require('../models/user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

module.exports.create = (req, res) => {
  res.render('users/new');
};

module.exports.doCreate = (req, res, next) => {

  function renderWithErrors(errors) {
    res.render('users/new', { errors, user: req.body });
  }

  delete req.body.role;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        renderWithErrors({ email: 'email already registered' })
      } else {
        return User.create(req.body)
          .then(() => res.redirect('/login'))
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors)
      } else {
        next(error);
      }
    })
};

module.exports.login = (req, res) => {
  res.render('users/login');
};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((ok) => {
          if (ok) {
            req.session.userId = user.id;
            res.redirect('/tweets');
          }
        })
        .catch(next);
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  res.redirect('/login');
}

