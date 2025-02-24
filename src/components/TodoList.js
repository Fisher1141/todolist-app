import React, { useState } from 'react';

function TodoList() {
  // Initialize state variables for todos and inputValue
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle input field change
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // Handle adding a new todo item
  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  }

  // Handle deleting a todo item
  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      {/* Input field to add a new todo */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      
      {/* Button to add todo */}
      <button onClick={handleSubmit}>Add Todo</button>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Button to delete todo */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
