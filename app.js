const path = require('path');
const express = require('express');

const logger = require('morgan');


// Create app server
const app = express();

// Configure hbs as view engine
app.set('view engine', 'hbs')

// Iteration 1: setup hbs as view engine
require('./config/hbs.config');
app.set('views', `${__dirname}/views`);
// Iteration 5: configure body parser






// Iteration 2: configure global template vars (res.locals.*)

// Configure router
const router = require('./config/routes.config');
app.use('/', router);

app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`App listening at port ${port}`);
})
