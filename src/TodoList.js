import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todoList.map((item,index)=><TodoItem key={index} item={item}/>)}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TodoList;
