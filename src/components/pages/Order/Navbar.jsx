import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {



    //AFFICHAGE
  return (
    <NavbarStyled>

    <div className="left-side">LEFT</div>
    <NavbarRightSide />
  </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    .left-side{
        background: pink;
    }

    .right-side{
        background: white;

    }
`