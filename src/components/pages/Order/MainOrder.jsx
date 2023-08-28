import { styled } from "styled-components"

export default function Main() {
  return (
    <Mainstyled className="main">
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>

    </Mainstyled>
  )
}

const Mainstyled = styled.div`

    background: #f5f5f5f7;
    flex: 1;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: 25% 1fr;

    .basket{
      background: pink;
    }

    .menu{
      background: purple;
    }

`