import React, { Component } from 'react'
import axios from 'axios';

class ListAll extends Component {
    constructor(props) {
        super(props);
        this.state = { listTodo : [] }
    }

    getAllTodo = () => {
        axios.get(`http://localhost:4000/api/v1/todos`)
        .then(response => {
            this.setState({listTodo :response.data})
        })
    }

    componentDidMount() {
        this.getAllTodo();
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.listTodo.map(eachTodo => {
                        return (
                        <div> 
                                <h1>{eachTodo.title}</h1>
                                <p>{eachTodo.body}</p>
                        </div>
                        )})}
              </div>
            </div>
        )
    }
}

export default ListAll;