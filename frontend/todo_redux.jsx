import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import Root from './components/root.jsx';

//when DOMContentLoaded, then do callback
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<Root />, root);
});
