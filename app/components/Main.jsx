import React from 'react';
import Form from "./children/Form.jsx";
import Results from "./children/Results.jsx";
/*import helpers from'../../utils/helpers.js';*/

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      fails: {}
    }
        this.setTerm = this.setTerm.bind(this);
  }

   componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");
      helpers.getFails().then((data) => {
        if (data !== this.state.results) {
          console.log(data);

          this.setState({ results: data });
        }
      });
    }
  }
   
  setTerm(term) {
    this.setState({
      term: term
    });
  }

  render() {
    return (
    <div>
      <div>
       <div style={{textAlign: 'center'}}>
          <h1>Failed Trades</h1>
        </div>
        <div>
        	<Form setTerm={this.setTerm}  />
        </div>
    </div> 
    </div> 
    );
  }
}

