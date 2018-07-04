import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
      <form>
          <input type="text" className="form-control" placeholder="Please enter input"></input>
          <br/>
          <button className="btn btn-primary" type="submit">{this.props.buttonText}</button>
      </form>
    );
    }
}

Todos.propTypes = {
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Todos;
