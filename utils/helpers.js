var axios = require('axios');

var helper = {


    getFails: function() {
      return  axios.get("/term", { SYMBOL: this.state.term})
    }

}

module.exports = helper;
