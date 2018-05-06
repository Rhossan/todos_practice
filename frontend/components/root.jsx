import React from 'react';
import {ReactDOM, Provider} from 'react-redux';
import App from './app';


const Root = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};
// (
//   // <Provider store={store}>
//   //   // <App />
//   // </Provider>
// );

export default Root;
