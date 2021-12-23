import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import StoringGradients from './store/StoringGradients.js';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    activeGradients: new StoringGradients()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);