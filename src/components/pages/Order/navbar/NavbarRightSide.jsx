//import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Profile from "./Profile";


// eslint-disable-next-line react/prop-types
export default function NavbarRightSide() {

  return (
    <NovbarRightSideStyled className="right-side">
  {/* <div className="admin-button">Admin Button</div>*/}
    <Profile />
    </NovbarRightSideStyled>
  )
}

const NovbarRightSideStyled = styled.div`

    display: flex;
    align-items: center;
    padding-right: 50px;

   /* .admin-button{
      background: lightblue;
    }*/

    .profil{
      background: yellow;
    }

`
