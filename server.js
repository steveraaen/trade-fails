var express = require('express');
/*var mongoose = require('mongoose');*/
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

/*mongoose.connect(pwds.mong);
var db = mongoose.connection;


db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});*/

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
