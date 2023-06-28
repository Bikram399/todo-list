import React from 'react';
import TodoCard from './Card';

const TodoList = ({ todos, completeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.createdAt}
          todo={todo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
