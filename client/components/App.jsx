import React from 'react';
import Button from "./children/Button.jsx";
import Results from "./children/Results.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <div>
       <div style={{textAlign: 'center'}}>
          <h1>Failed Trades</h1>
        </div>
        <div>
        	<Button  />
        </div>
    </div> 
    </div> 
    );
  }
}

