import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createAppStore } from "./store/config/storeConfig"
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={createAppStore()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
