// import gon from 'gon';
// import i18next from 'i18next';
import ReactDOM from 'react-dom';
import React from 'react';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import App from './App.jsx';
// import ru from './locales/ru';

export default () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('chat'),
  );
};
