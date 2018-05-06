import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import Root from './components/root.jsx';
import configureStore from './store/store';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app';
import allTodos from './reducers/selectors';

//when DOMContentLoaded, then do callback
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store}/>, root);
});
