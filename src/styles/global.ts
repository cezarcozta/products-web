import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    color: #313131;

    font-size: 16px;
    font-family: sans-serif;
    
    max-width: 360px;
    max-height: 640px;
  }

  html{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;