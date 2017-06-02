import React from 'react';

 class Form extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <form className="form-inline">
		  <div className="form-group">
		    <input type="email" className="form-control" id="email"></input>
		  </div>
		  <div className="form-group">
		    <input type="password" className="form-control" id="pwd"></input>
		  </div>
		  <div className="checkbox">
		    <input type="checkbox"></input>
		  </div>
		  <button type="submit" className="btn btn-default">Submit</button>
		</form>
      </div>);
  }
}

export default Form;

