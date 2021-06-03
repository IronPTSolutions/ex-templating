const path = require('path');
const express = require('express');
const logger = require('morgan');
require('./config/hbs.config')


// Create app server
const app = express();

// Configure hbs as view engine
// Iteration 1: setup hbs as view engine
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

// Iteration 5: configure body parser

// Iteration 2: configure global template vars (res.locals.*)
app.use((req, res, next) => {
  res.locals.path = req.path; ///me quedo con el path de la req, esta variable es la que tengo cargada en la vista
  next();
}); 

// Configure router
const router = require('./config/routes.config');
app.use('/', router);

app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`App listening at port ${port}`);
})
