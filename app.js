const path = require('path');
const express = require('express');
const logger = require('morgan');

// Create app server
const app = express();

// Configure hbs as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'hbs');

// Iteration 1: setup hbs as view engine
require('./config/hbs.config');

// Iteration 5: configure body parser
app.use(express.urlencoded({ extended: true }));

// Iteration 2: configure global template vars (res.locals.*)
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Configure router
const router = require('./config/routes.config');
app.use('/', router);

app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`Dale caña al ${port}`);
})
