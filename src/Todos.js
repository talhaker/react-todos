import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import MyForm from './MyForm';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hadas",
      todoList: [
        "Create React App",
        "Create new components",
        "Learn props and state"
      ],
      inputValue: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange() {
    console.log('Input changed!');
  }

  onButtonClick() {
    alert("clicked");
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <MyForm onTextChange={this.onInputChange} onButtonClick={this.onButtonClick} buttonText={this.props.buttonText} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

Todos.propTypes = {
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Todos;
