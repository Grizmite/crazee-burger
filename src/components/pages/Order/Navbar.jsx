//Navbar.jsx
import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "/Users/Chabert/Desktop/crazee-burger/src/components/reusable-ui/Logo.jsx"

// eslint-disable-next-line react/prop-types
export default function Navbar() {



    //AFFICHAGE
  return (
    <NavbarStyled>
    <Logo className={"logo-login-page"}/>
    <div className="left-side" />
    <NavbarRightSide />
  </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    .left-side{
        background: pink;
    }

    .logo-login-page{
        transform: scale(0.4);
       
    }
`