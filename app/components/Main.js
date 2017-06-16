import React from 'react';
import Form from "./children/Form.js";
import Results from "./children/Results.js";
import helper from'../../utils/helpers.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      results: {}
    };

        this.setTerm = this.setTerm.bind(this);
  }

componentDidMount() {
    helper.getFails().then((data) => {  
      this.setState({ results: data });
      console.log(data)
      console.log(this.state.results.data)
    
  });
}  
/*componentDidUpdate(prevProps, prevState) {

}*/
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
        	<Form setTerm={this.setTerm} term={this.state.term} />
        </div>
        <div>
          <Results results={this.state.results}  />
        </div>
    </div> 
    </div> 
    );
  }
}
export default Main;
