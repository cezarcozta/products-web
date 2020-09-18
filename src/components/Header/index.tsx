import React from 'react';

import { Container, ButtonBack, Image } from '../../styles/components/Header';

const Header: React.FC = () => {
  return (
    <Container>
      <ButtonBack>Voltar</ButtonBack>
      <Image><p>PROFUSE</p></Image>
    </Container>
  );
}

export default Header;