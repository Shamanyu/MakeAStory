// This module will call all the Initialisation function calls

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Importing CSS for External Libraries
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './store';
import App from './App';

// Importing Project CSS

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
