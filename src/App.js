import React, { useState, useEffect } from 'react';
import TodoInput from './components/Input';
import TodoList from './components/List';
import './App.css';
import icon from './assest/icon.png';
import completeicon from './assest/checked.png'

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t === todo) {
        return { ...t, completed: true };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1><img src={icon} alt="icon" /> To Do List</h1>
        <button onClick={resetTodos}>Reset</button>
      </div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos.filter((todo) => !todo.completed)} completeTodo={completeTodo} />
      <h1> <img src={completeicon} alt='logo'/> Completed Task</h1>
      <TodoList todos={todos.filter((todo) => todo.completed)} completeTodo={completeTodo} />
    </div>
  );
};

export default App;
