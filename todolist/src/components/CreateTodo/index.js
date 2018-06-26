import React, { Component } from 'react';
import './style.css';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onClickButton = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="CreateTodo">
        <input
          className="CreateTodo-input"
          value={this.state.input}
          onChange={this.onInputChange}
        />
        <button onClick={this.onClickButton} className="CreateTodo-button">
          Create
        </button>
      </div>
    );
  }
}

export default CreateTodo;
