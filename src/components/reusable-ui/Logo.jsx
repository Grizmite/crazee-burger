import { styled } from 'styled-components';
import { theme } from '/Users/Chabert/Desktop/crazee-burger/src/components/theme/index.js';

// eslint-disable-next-line react/prop-types
export default function Logo({className}) {
  return (
    <LogoFormStyled className={className}>
     <h1>Crazee</h1>
     <img src="/images/logocrazeeburger.png" alt="logo-crazee-burger"/>
     <h1>Burger</h1>
    </LogoFormStyled>
  )
}
const LogoFormStyled = styled.div`
  background: transparent; 
  color: white;
  display: flex;
  align-items: center;
  

  h1{
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.XL};
    line-height: 1em;
    font weight: ${theme.fonts.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
   

  }

  img{
    object-fit: contain;
    object-position: center;
    height: 300px;
    width: 300px;
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
