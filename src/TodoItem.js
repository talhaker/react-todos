import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.string.isRequired
};

export default TodoItem;
