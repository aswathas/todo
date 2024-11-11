import React from 'react';
    import TodoItem from './TodoItem';

    function TodoList({ todos }) {
      return (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      );
    }

    export default TodoList;
