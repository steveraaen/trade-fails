import React from 'react';
var helper = require('../../../utils/helpers.js');



class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = { symbol: "AAPL"}
	}


	render() {
		return ( <div>
			<button style={{marginRight: 20}}  onClick={helper.handleClick} type="submit" className="btn btn-default">Submit</button>
				</div>
			)
	}
}

export default Button;