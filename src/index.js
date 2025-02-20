import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app/App';
import { Provider } from 'react-redux';
import store from '../src/app/store';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
