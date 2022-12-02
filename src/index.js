import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Strcit mode causes a rerender of <App/> which results in the useContentLinks being called twice
  // <React.StrictMode> 
    <App />
  // </React.StrictMode>
);

