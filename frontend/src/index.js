import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.globalVars = {
  account: {
    email: "",
    _email: "",
    session: localStorage.getItem("session")
  },
  cart:{},
  fireworkData: [],
  shopData: [],
  activeFirework: "",
  _activeFirework: "",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);