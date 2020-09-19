import React from 'react';

import {
  Container,
  Button,
  BtnGroup,
  Form,
  Social,
  Info
} from '../../styles/pages/SingUp';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Social>
        <Info>Cadastre-se com<br />suas redes sociais</Info>

        <BtnGroup>
          <Button>
            f
        </Button>
          <Button>
            G
        </Button>
        </BtnGroup>
      </Social>

      <Form>
        <h5>Ou Preencha o formulário abaixo.</h5>

        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <a href="/" className="forgot-password">Esqueci a senha</a>

        <ul>
          <li>
            <input type="checkbox" className="check" />
            <p>Declaro que as informações fornecidas acima <br /> são verdadeiras.
              <a href="/">Ler mais.</a>
            </p>
          </li>
          <li>
            <input type="checkbox" className="check" />
            <p>Aceito e concordo com os termos de uso do <br /> aplicativo My Profuse.
              <a href="/">Ler mais.</a>
            </p>
          </li>
          <li>
            <input type="checkbox" className="check" />
            <p>Autorizo a utilização das minhas informações<br /> em outras plataformas do Aché.
              <a href="/">Ler mais.</a>
            </p>
          </li>
        </ul>

        <button>Cadastrar</button>
      </Form>

    </Container>
  );
}

export default SignUp;