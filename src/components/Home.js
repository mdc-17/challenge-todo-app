import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/newTodo">
          <h1> Create a todo </h1>
        </Link>
        <Link to="/ListAll">
          <h1> List Todo </h1>
        </Link>
      </div>
    );
  }
}

export default Home;
