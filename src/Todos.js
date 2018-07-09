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
  };

  onInputChange = () => {
    this.setState((state, props) => {
      return { text: this.myForm.textInput.value }
    });
  }

  onButtonClick = () => {
    let todo = this.state.text;
//    this.setState({todoList: this.state.todoList.concat([todo])});
    // this.setState(prevState => ({
    //   todoList: [...prevState.todoList, todo]
    // }));
    this.setState((state, props) => {
      return { todoList: state.todoList.concat(todo), text: "" }
    });
}

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <MyForm onTextChange={this.onInputChange} onButtonClick={this.onButtonClick}
                        ref={(form)=>this.myForm = form} inputText={this.state.text} buttonText={this.props.buttonText}/>
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

Todos.propTypes = {
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Todos;


// אריאל 0527345545 (צורי גואטה)