import React from "react";

class Results extends React.Component {
  constructor(props) {
      super(props);
      
  }

componentDidUpdate() {
    console.log('componentDidUpdate')
         console.log(this.props.results.data.length);

         this.props.results.data.map(function(item, i){
          console.log(item._id);
          return <li key={i}>{item.SYMBOL}</li>
})
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

/*class Hello extends React.Component{
  tablerows() {
    return this.props.results.data.map(rows => {
      var row = rows.map(cell => <td>{cell}</td>); 
      return(
        <tr>{row}</tr>
      );
    });
  }
  render() {
    return <table>{this.tablerows()}</table>;
  }
}
export default Hello;*/