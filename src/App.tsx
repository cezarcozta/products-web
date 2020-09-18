import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
    </>
  );
}

export default App;
