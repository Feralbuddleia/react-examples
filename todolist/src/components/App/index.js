import React, { Component } from 'react';
import CreateTodo from '../CreateTodo';
import Todos from '../Todos';
import Filter from '../Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], filter: 'all' };
  }

  addTodo = content => {
    const newTodo = { content: content, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleTodo = index => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        {
          ...this.state.todos[index],
          completed: !this.state.todos[index].completed
        },
        ...this.state.todos.slice(index + 1)
      ]
    });
  };

  setFilter = filter => {
    this.setState({ filter: filter });
  };
  render() {
    return (
      <div className="App">
        <CreateTodo addTodo={this.addTodo} />
        <Todos
          toggleTodo={this.toggleTodo}
          todos={this.state.todos}
          currentFilter={this.state.filter}
        />
        <Filter setFilter={this.setFilter} currentFilter={this.state.filter} />
      </div>
    );
  }
}

export default App;
