var axios = require('axios');
var Fail = require('../models/Fails.js');



var helper = {


    getFails: function() {
      return  axios.get("/term", { SYMBOL: this.state.term})
    }

}

module.exports = helper;
