import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const NavButton = styled.li`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
  }

  padding: 6px 60px;

  display: flex;
  
  background: #FFF;

  border-bottom: 1px solid #000;
`;