import React from "react";

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidUpdate(){
      this.state = {
      results: this.props.results
    }
   


  }

  render() {


    return (

      <div className="panel panel-default">
        <div className="panel-heading">
        <h1>Fails</h1>
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
        



        </div>
      </div>
    );
  }
}

export default Results;
