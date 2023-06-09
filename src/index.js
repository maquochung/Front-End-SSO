import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './Store/Store';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Components/formlogin/login';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginForm />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
