var axios = require('axios');

var helper = {

  getFails: function(symbol) {
    return axios.get("/api");
  },

  handleClick: function(e) {
    e.preventDefault();
	  console.log('The link was clicked.');
  }
}

module.exports = helper;