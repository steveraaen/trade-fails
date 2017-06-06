var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var pwds = require('./pwds');
var Fail = require('./models/Fails.js');
var helper = require('./utils/helpers.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
mongoose.connect(pwds.mong);
mongoose.Promise = Promise;

var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/term", function(req, res) {
    helper.getFails()
    Fail.find({}, function(error, doc) {
        if (error) {
            console.log(error);
        } else {
            console.log(doc)
            res.send(doc);
        }
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
});
module.exports = app;




/*var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var pwds = require('./pwds');
var Fail = require('./models/Fails.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
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
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/fails/:term", function(req, res) {
    Fail.find({ "SYMBOL": req.params.term }, function(error, doc) {
        if (error) {
            console.log(error);
        } else {
            res.send(doc);
        }
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
module.exports = app;
*/