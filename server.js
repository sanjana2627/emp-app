const express = require("express");
const path = require("path");
const _ = require('lodash');

const config = require("./config");
const employees = require("./routes/employees");

require('./models/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'doc')));


function combineParams(req, res, next) {
  req.combinedParams = _.extend({}, req.query, req.params, req.body);
  next();
};


app.use("/api/employees", combineParams, employees);

app.use('/doc', (req, res) => {
  res.sendFile(__dirname + "/doc/index.html");
});

app.use('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(config.PORT, () => {
  console.log(`Server running in ${config.PORT}`);
})