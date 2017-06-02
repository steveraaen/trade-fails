import React from 'react';

 class Form extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <form className="form-inline" >
		  <div className="form-group">
		    <input style={{marginRight: 20}} type="text" placeholder="Enter Symbol" className="form-control" id="email"></input>
		  </div>
		  <div className="form-group">
		    <input style={{marginRight: 20}} type="range" className="form-control" id="pwd"></input>
		  </div>
		  <div className="checkbox">
		    <input style={{marginRight: 20}} type="checkbox"></input>
		  </div>
		  <button style={{marginRight: 20}} type="submit" className="btn btn-default">Submit</button>
		</form>
      </div>);
  }
}

export default Form;

