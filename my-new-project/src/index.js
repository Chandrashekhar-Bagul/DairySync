// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
