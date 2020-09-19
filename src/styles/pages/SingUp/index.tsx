import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  align-items: center;

  flex-direction: column;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  padding: 25px;
`;

export const Info = styled.h6`
  color: #313131;
  align-self: center;

  margin-right: 20px;
`;

export const BtnGroup = styled.div`
  margin-left: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  
  height: 50px;
  width: 75px;
  
  background: #FFF;

  font-size: 25px;
  font-weight: bold;

  border: 1px solid #000;

  + button {
    margin-left: 10px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .forgot-password {
    display: flex;
    justify-content: center;
  }

  h5 {
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
  }

  ul {
    margin-top: 10px;
    list-style: none;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      input {
        height: 30px;
        width: 20px;
      }

      p{
        margin-left: 10px;

        a {
          margin-left: 5px;
        }
      }
    }
  }

  input{
    height: 50px;

    margin-bottom: 10px; 

    ::placeholder{
      font-size: 14px;
      padding: 10px;
    }
  }

  button {
    height: 50px;

    background: #C4C4C4;
    border: 0;

    color: #313131;
  }
  
`;