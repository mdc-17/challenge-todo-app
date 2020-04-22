import React, { Component } from "react";
import axios from "axios";


class CreateTodo extends Component {
  state = { title: "", body: ""};

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {title, body } = this.state;
    console.log (title, body);
    await axios
      .post(`http://localhost:4000/api/v1/todos`, { title, body}, {withCredentials: true})
      
  };

  handleChange = (event) => {
    const { title, value } = event.target;
    this.setState({ [title]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.title}
            onChange={(e) => this.handleChange(e)}
          />
          <label>body:</label>
          <input
            type="text"
            name="body"
            value={this.body}
            onChange={(e) => this.handleChange(e)}
          />
          
          <button type="submit" value="Submit">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
