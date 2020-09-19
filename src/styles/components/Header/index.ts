import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;

  padding: 10px;
`;

export const ButtonBack = styled.button`
  font-size: 15px;
  border: 0;
  background: #FFF;

  img {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: flex-start;

  p{
    font-size: 22px;
    width: 150px;

    justify-content: center;
  }
`;