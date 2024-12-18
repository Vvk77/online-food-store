import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { FoodApp,DataProvider } from './Context/Context';

import { BrowserRouter as Router  } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

 export {FoodApp}
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
    <App />
    </DataProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
