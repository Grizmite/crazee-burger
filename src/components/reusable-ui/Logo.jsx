//Logo.jsx
import { styled } from 'styled-components';

export default function Logo() {
  return (
    <LogoFormStyled>
     <h1>Crazee</h1>
     <img src="public/images/logocrazeeburger.png" alt="logo-crazee-burger"/>
     <h1>Burger</h1>
    </LogoFormStyled>
  )
}

const LogoFormStyled = styled.div`
  background: transparent; 
  /*border: 1px solid blue;*/
  color: white;
  display: flex;
  align-items: center;
  /*transform: scale(2.5);(duplique le fond sans raison --> est utilisé pour être dynamique*/

  h1{
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 100px;
    line-height: 1em;
    font weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;

  }

  img{
    object-fit: contain;
    object-position: center;
    height: 350px;
    width: 350px;
    margin: 0 5px;

  }

  ::after {
    content: "";
    background: url("/images/burger-background.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
  }
`