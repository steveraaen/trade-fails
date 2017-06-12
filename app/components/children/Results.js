import React from "react";

class Results extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    this.state = {
      results: this.props.results
    }

    var fails = (10);
    fails = this.state.results.data;
    console.log(fails)
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
