import React, { useState } from 'react';

    function AddTodoForm({ onAddTodo }) {
      const [newTodoText, setNewTodoText] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodoText.trim()) {
          onAddTodo({ text: newTodoText });
          setNewTodoText('');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new todo..."
          />
          <button type="submit">Add</button>
        </form>
      );
    }

    export default AddTodoForm;
