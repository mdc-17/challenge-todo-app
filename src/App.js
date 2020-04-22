import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateTodo from './components/CreateTodo';
import ListAll from './components/ListAll';
import home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={home} />
       <Route exact path='/newTodo' component={CreateTodo} />
       <Route exact path='/ListAll' component={ListAll} />
      </div>
    );
  }
}

export default App;
