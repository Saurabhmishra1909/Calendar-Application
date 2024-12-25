import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new React 18 API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to log web vitals (performance metrics)
reportWebVitals(console.log);
