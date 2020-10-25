import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routers/indes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;