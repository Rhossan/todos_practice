export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => {
  return ({
    todos: todos,
    type: RECEIVE_TODOS
  });
};

export const receiveTodo = (todo) => {
  return ({
    todo: todo,
    type: RECEIVE_TODOS
  });
};
