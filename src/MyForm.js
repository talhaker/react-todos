import React, { Component } from 'react';

class MyForm extends Component {
    constructor() {
        super();

        this.textInput = null;
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    id="txtTodo"
                    value={this.props.inputText}
                    onChange={this.props.onTextChange}
                    ref={(input)=>this.textInput=input}/>
                <button type="button" onClick={this.props.onButtonClick}>{this.props.buttonText}</button>
            </form>
        );
    }
}

export default MyForm;
