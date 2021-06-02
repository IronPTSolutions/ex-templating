const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Create app server
const app = express()
app.use(express.static('public'))

// Configure hbs as view engine
app.set('view engine','hbs')


// Iteration 1: setup hbs as view engine
require('./config/hbs.config')
app.set('views', `${__dirname}/views` )

// Iteration 5: configure body parser

app.use(bodyParser.urlencoded({ extended: true }));



// Iteration 2: configure global template vars (res.locals.*)
app.use((req, res, next) => {
  res.locals.path = req.path;
  next()
})


// Configure router
const router = require('./config/routes.config');
app.use('/', router);

app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`App listening at port ${port}`);
})
