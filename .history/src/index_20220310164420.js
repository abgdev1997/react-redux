import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createAppStore } from "./store/config/storeConfig"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
