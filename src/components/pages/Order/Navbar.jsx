import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar() {

    const { username } = useParams();


    //AFFICHAGE
  return (
    <NavbarStyled>
    NAVBAR
  <h1>Hello { username }</h1>
  <Link to="/">
      <button>Deconnexion</button>
  </Link>
  </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
`