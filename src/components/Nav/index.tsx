import React from 'react';

import { Container, Button } from '../../styles/components/Nav';

const Nav: React.FC = () => {
  return (
    <Container>
      <Button>Cadastrar</Button>
      <Button>Entrar</Button>
    </Container>
  );
}

export default Nav;