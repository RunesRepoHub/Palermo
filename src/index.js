import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS if you have any
import App from './App'; // Import your main application component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure web performance, you can use reportWebVitals
reportWebVitals();