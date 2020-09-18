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
    
    max-width: 700px;

    display: flex;
    flex-direction: column;
    align-items: space-around;
  }
`;