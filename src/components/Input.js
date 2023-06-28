import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo({
        text: todoText,
        completed: false,
        createdAt: new Date().getTime(),
      });
      setTodoText('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a todo..."
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TodoInput;
