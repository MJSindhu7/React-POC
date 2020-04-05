import React, { Component } from "react";
import Ninjas from "./Ninjas";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };
  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  sub = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.sub}>
          <label>Name:</label>
          <input type="text" id="name" onChange={this.change}></input>
          <label>Age:</label>
          <input type="text" id="age" onChange={this.change}></input>
          <label>Belt:</label>
          <input type="text" id="belt" onChange={this.change}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
