import React from 'react';
import './style.css';

const Todos = props => {
  // props.todos
  return (
    <ul className="Todos">
      {props.todos.map((todo, index) => {
        if (ifShow(props.currentFilter, todo.completed)) {
          return (
            <li
              className="Todos-item"
              key={index}
              onClick={() => {
                props.toggleTodo(index);
              }}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.content}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

function ifShow(currentFilter, completed) {
  if (currentFilter === 'all') {
    return true;
  } else if (currentFilter === 'completed' && completed) {
    return true;
  } else if (currentFilter === 'active' && !completed) {
    return true;
  } else {
    return false;
  }
}

export default Todos;
