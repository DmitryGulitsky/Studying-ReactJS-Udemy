import React from 'react';

import TodoListItem from './toDoListItem';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem { ...itemProps }
          // label={item.label}   // так как названия одинаковы, можно использовать spread выше
          // important={item.important}
        /></li>
    )
  });

  return (
    <ul>
      { elements }
    </ul>
  )
};

export default TodoList;