import React from "react";

class Results extends React.Component {
  constructor(props) {
      super(props);

  }
componentDidUpdate() {
    console.log('componentDidUpdate')
 
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
