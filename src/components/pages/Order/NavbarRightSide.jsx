import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";


// eslint-disable-next-line react/prop-types
export default function NavbarRightSide() {

    const { username } = useParams();


  return (
    <NovbarRightSideStyled className="right-side">
    RIGHT
    <h1>Hello { username }</h1>
  <Link to="/">
      <button>Deconnexion</button>
  </Link>
    </NovbarRightSideStyled>
  )
}

const NovbarRightSideStyled = styled.div`

    background: white;

`
