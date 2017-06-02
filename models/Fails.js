var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FailSchema = new Schema({
    SETTLEMENT_DATE: Number,
    CUSIP: String,
    SYMBOL: String,
    FAILS: Number,
    DESCRIPTION: String,
    PRICE: Number
});

var Fail = mongoose.model("Fail", FailSchema);

module.exports = Fail;
