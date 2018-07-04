import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.applicationName}</h1>
        </header>
        <Todos buttonText="Add Item" name="todo-item" />
      </div>
    );
  }
}

App.propTypes = {
  applicationName: PropTypes.string.isRequired
};

export default App;
