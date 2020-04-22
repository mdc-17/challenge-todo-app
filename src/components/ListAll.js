import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListAll extends Component {
  constructor(props) {
    super(props);
    this.state = { listTodo: [] };
  }

  getAllTodo = () => {
    axios.get(`http://localhost:4000/api/v1/todos`).then((response) => {
      this.setState({ listTodo: response.data });
    });
  };

  componentDidMount() {
    this.getAllTodo();
  }

  handleDelete = (idTodo) => {
    console.log("ID Todo", idTodo);
    axios.delete(`http://localhost:4000/api/v1/todos/${idTodo}`);
    this.props.history.push("/ListAll")
  };

  render() {
    return (
      <div>
        <div>
          {this.state.listTodo.map((eachTodo) => {
            return (
              <div>
                <Link to={`/todos/${eachTodo._id}`}>
                  <h1>{eachTodo.title}</h1>
                </Link>
                <p>{eachTodo.body}</p>
                <button onClick={() => this.handleDelete(eachTodo._id)}>
                  {" "}
                  Borrar Todo
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListAll;
