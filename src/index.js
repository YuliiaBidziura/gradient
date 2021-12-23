import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);