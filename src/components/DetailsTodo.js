import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditTodo from './EditTodo';

class DetailsTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getaTodo();
  }

  getaTodo = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then(response => {
        const theTodo = response.data;
        this.setState(theTodo);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if(!this.state.title){
      this.getaTodo();
    } else {
      return <EditTodo theTodo={this.state} getTheTodo={this.getaTodo} {...this.props} />
    }
}

deleteProject = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/ListAll'); 
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteProject()}>Delete Todo</button> 
        <Link to={'/ListAll'}>Back to Todo</Link>
      </div>
    )
  }
}

export default DetailsTodo;