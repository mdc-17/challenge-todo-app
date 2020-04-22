import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title,
      body: this.props.todo.body
    };
  }

  handleFormSubmit = event => {
    const title = this.state.title;
    const body = this.state.body;

    event.preventDefault();

    axios.put(`http://localhost:4000/api/v1/todos/${this.props.todo._id}`, 
    {
        title,
        body
      })
      .then(() => {
        this.props.history.push("/ListAll");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>body:</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={e => this.handleChangeBody(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditTodo;