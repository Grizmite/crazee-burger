// LoginPage.jsx
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";


function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before{
    content: "";
    background: url("/images/burger-background.jpg") ;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
    /*je n'arrive pas à rendre le fond opaque avec "background-blend-mode: darken;" (ticket: F03 - 1/5) */
    ::after {
    content: "";
    background: rgba(0, 0, 0, 0.25); /* Couleur de fond sombre semi-transparente */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`


export default LoginPage;