import React from 'react';
import Form from "./children/Form.jsx";
import Results from "./children/Results.jsx";
import helpers from'../../utils/helpers.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "AAPL",
      fails: {}
    }
  }
  render() {
    return (
    <div>
      <div>
       <div style={{textAlign: 'center'}}>
          <h1>Failed Trades</h1>
        </div>
        <div>
        	<Form appState={this.state}  />
        </div>
    </div> 
    </div> 
    );
  }
}

