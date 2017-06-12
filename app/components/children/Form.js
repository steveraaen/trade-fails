import React from "react";
import helper from "../../../utils/helpers.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({term: event.target.value });
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.state = {term: event.target.value };

      helper.getFails(this.state.term).then((data) => {
    if (data !== this.state.results) {

      this.state = { results: data };
    }
  });

  }

  render() {
    return (
      <form action="/term" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id="term" type="text" value={this.state.value} onSubmit={this.handleSubmit} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;