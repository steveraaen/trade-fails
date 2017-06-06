import React from "react";
import helper from "../../../utils/helpers.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();
        helpers.getFails().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("Fails", response.data);
        this.setState({ fails: response.data });
      }
    }.bind(this));
    console.log(this.state)
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Location</strong></h4>
              <input
                type="text"
                className="form-control text-center"
                id="term"
                name="term"
                value={this.state.term}
                onChange={this.handleChange}               
              />
              <br />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
