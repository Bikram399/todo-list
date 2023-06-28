import React from 'react';

const TodoCard = ({ todo, completeTodo }) => {
  const handleCardClick = () => {
    completeTodo(todo);
  };

  return (
    <div
      className={`todo-card ${todo.completed ? 'completed' : ''}`}
      onClick={handleCardClick}
    >
      {todo.text}
    </div>
  );
};

export default TodoCard;
