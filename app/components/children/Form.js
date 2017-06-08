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
     console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    console.log(this.state.term);
    this.props.setTerm(this.state.term);
    console.log(this.props);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form action="/term" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id="term" type="textarea" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;