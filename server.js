var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var pwds = require('./pwds');
var path = require('path');
var FailTrade = require('./models/Fails.js');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

mongoose.connect(pwds.mong);
mongoose.Promise = Promise;

var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
    console.log(__dirname)
    res.send('hello');
});
app.get("/fails", function(req, res) {

  FailTrade.find({}, function(error, doc) {

    if (error) {
      console.log(error);
    }

    else {
    	console.log(req.body)
      res.json(doc);
    }
  });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
