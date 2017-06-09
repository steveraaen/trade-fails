var axios = require('axios');

var helper = {

  getFails: function() {
    return axios.get("/term");
  }

}

module.exports = helper;
