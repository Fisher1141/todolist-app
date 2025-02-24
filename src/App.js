import React from 'react';
import './App.css';
import Counter from './components/Counter';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Andrew Fisher - Basic App Deployment</h2>
        <h3>Simple Counter</h3>
        <Counter />
        <h3>Form Input</h3>
        <FormInput />
        <h3>Todo List</h3>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
