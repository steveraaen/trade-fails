import React from "react";

class Results extends React.Component {

  constructor(props) {
    super(props);

console.log(props)
  }

  render() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">

          <h1>Fails:</h1>

            {console.log(this.props, this.state)}

        </div>
      </div>
    );
  }
}

export default Results;
