import React, { useState } from 'react';
    import TodoList from './TodoList';
    import AddTodoForm from './AddTodoForm';

    function App() {
      const [todos, setTodos] = useState([]);

      const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
      };

      return (
        <div>
          <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoList todos={todos} />
        </div>
      );
    }

    export default App;
