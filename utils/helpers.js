var axios = require('axios');

var helper = {

    getFails: function(term) {
        return axios.get("/term/:symbol").then(function (response){
        	
        })
        .catch(function(error){
        	console.log(error);
        })
        console.log('getFails has been called')
    }

}

module.exports = helper;
