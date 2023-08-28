import { styled } from "styled-components";
import Navbar from "./Navbar";
import MainOrder from "./MainOrder";

export default function OrderPage() {

    //ETAT
   
    //COMPORTEMENT



    //AFFICHAGE
    return (
      <OrderPageStyled>
      <div className="container">
      <Navbar />
      <MainOrder />
        </div>
      </OrderPageStyled>
    )
  }

  const OrderPageStyled = styled.div`
  background-color: #ffa01b;
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
    border-radius: 15px;
 
  }
  `
  
