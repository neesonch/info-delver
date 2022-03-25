import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { schema } from './schema';

ReactDOM.render(
  <React.StrictMode>
    <App schema={schema} />
  </React.StrictMode>,
  document.getElementById('root')
);
