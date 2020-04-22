import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CreateTodo from './components/CreateTodo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/newTodo' component={CreateTodo} />
      </div>
    );
  }
}

export default App;
