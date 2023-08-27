import { styled } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {

    //ETAT
   
    //COMPORTEMENT



    //AFFICHAGE
    return (
      <OrderPageStyled>
      <div className="container">
      <Navbar />
      <Main />
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
    display: flex;
    flex-direction: column;

 
  }
  `
  
