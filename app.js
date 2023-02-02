const express = require("express");
const logger = require("morgan");

// Configure DB
require("./config/db.config");

// Create app server
const app = express();

// Configure hbs as view engine
// Iteration 1: setup hbs as view engine
require("./config/hbs.config");

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.urlencoded());
app.use(logger("dev"));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

const routes = require("./config/routes.config");
app.use("/", routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send("Ops, ha sucedido un error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`));
