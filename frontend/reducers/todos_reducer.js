import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';

const todosReducer = (state = {},action) => {
  switch (action.type) {
    case RECEIVE_TODO:
      return

    case RECEIVE_TODOS:
      return
    default:
      return state;
  }
};

export default todosReducer;
