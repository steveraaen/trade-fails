var axios = require('axios');


var helper = {


    getFails: function() {


        axios.get('/fails')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
	    }

	}

module.exports = helper;
