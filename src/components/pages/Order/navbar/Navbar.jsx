//Navbar.jsx
import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "/Users/Chabert/Desktop/crazee-burger/src/components/reusable-ui/Logo.jsx"
import { refreshPage } from "../../../../utils/windows";

// eslint-disable-next-line react/prop-types
export default function Navbar() {

    //ETAT

    //COMPORTEMENT 


    //AFFICHAGE
  return (
    <NavbarStyled>
    <Logo className={"logo-order-page"} onClick={ refreshPage } />
    <div className="left-side" />
    <NavbarRightSide />
  </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: white;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    .left-side{
        background: pink;
    }

    .logo-order-page{
        transform: scale(0.4);
        cursor: pointer;
    }
`