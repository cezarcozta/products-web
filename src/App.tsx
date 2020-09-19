import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <SignUp />
    </>
  );
}

export default App;
