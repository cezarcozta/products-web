import React from 'react';

import LeftArrow from '../../assets/arrow-left.svg';

import { Container, ButtonBack, Image } from '../../styles/components/Header';

const Header: React.FC = () => {
  return (
    <Container>
      <ButtonBack>
        <img src={LeftArrow} alt="left arrow" />
      </ButtonBack>
      <Image><p>PROFUSE</p></Image>
    </Container>
  );
}

export default Header;