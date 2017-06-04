var axios = require('axios');


var helper = {


    getFails: function(term) {    
        axios.get('/fails')
            .then(function(response) {
            		console.log(term)
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
	    }

	}

module.exports = helper;
