import React from "react";

class Results extends React.Component {

  constructor(props) {
      super(props);

  }

  componentDidUpdate() {

 
  }


  render() {
    
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
        <h1>Fails</h1>
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <ul>
            
            { JSON.stringify(this.props.results.data).map(function(search, i) {
            return (
              <p key={i}>{search._id} - {search.SYMBOL}</p>
            );
          })}
          </ul>


        </div>
      </div>
    );
  }
}

export default Results;
