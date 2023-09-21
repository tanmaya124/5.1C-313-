import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewPost from './newfile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewPost />
  </React.StrictMode>
);

reportWebVitals();
