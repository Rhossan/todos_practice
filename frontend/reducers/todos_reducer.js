import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import {merge} from 'lodash';
// import {receiveTodos, receiveTodo} from '../actions/todo_actions';

export const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const todosReducer = (state = initialState,action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    // return state;
    case RECEIVE_TODO:

      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    //
    // return state;

    default:
      return state;
  }
};
