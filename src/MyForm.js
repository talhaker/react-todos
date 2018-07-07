import React, { Component } from 'react';

function MyForm(props) { 
    return (
        <form>
            <input type="text" id="txtTodo" onChange={props.onTextChange} />
            <button type="button" onClick={props.onButtonClick}>{props.buttonText}</button>
        </form>
    );
}

export default MyForm;
