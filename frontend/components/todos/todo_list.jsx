import React from 'react';
//do i need to import anything else???

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map ((todo, idx) => <li key={idx}>{todo.title}</li>)}
    </ul>
  );
};

export default TodoList;
