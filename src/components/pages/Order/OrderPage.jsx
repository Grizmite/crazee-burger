import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function OrderPage() {

    //ETAT
   const { username } = useParams();
   
    //COMPORTEMENT

    //AFFICHAGE
    return (
      <OrderPageStyled>
      <div className="container">
        <h1>Hello { username }</h1>
        <Link to="/">
            <button>Deconnexion</button>
        </Link>
        </div>  
      </OrderPageStyled>
    )
  }

  const OrderPageStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    background: red;
    height: 95vh;
    width: 1400px;
  }
  `
  
