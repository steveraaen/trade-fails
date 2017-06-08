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
componentDidUpdate(prevProps, prevState) {
if (prevState.searchTerm !== this.state.term) {
  console.log("UPDATED" + this.state.term);

  helper.getFails(this.state.term).then((data) => {
    if (data !== this.state.results) {
      console.log('line 21  :', this.state.results);

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
        	<Form setTerm={this.setTerm} props={this.props} />
        </div>
        <div>
          <Results cs={this.props}  />
        </div>
    </div> 
    </div> 
    );
  }
}
export default Main;
