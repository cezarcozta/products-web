import React from 'react';

import { Container, NavButton } from '../../styles/components/Nav';

const Nav: React.FC = () => {
  return (
    <Container>
      <NavButton>
        <a href="/">Cadastrar</a>
      </NavButton>
      <NavButton>
        <a href="/">Entrar</a>
      </NavButton>
    </Container>
  );
}

export default Nav;