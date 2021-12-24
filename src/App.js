import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js'
import { observer } from 'mobx-react-lite';
import Footer from './components/Footer.js';

const App = observer(() => {
  return (
    <BrowserRouter>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
