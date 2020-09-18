import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: '#C4c4c4';
    font-size: 16px;
    color: '#313131';
    font-family: sans-serif;
  }
`;