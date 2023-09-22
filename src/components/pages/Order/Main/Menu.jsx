import { useState } from 'react';
import { styled } from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu';


export default function Menu() {
  
        //Etat
        const [menu, setMenu] = useState(fakeMenu2);

        //comportement
  
        //Affichage
    return (

    <MenuStyled>
        {menu.map((produit) => {
           return <div className='produit'>{produit.title}</div>
        })}
    </MenuStyled>
  )
}


const MenuStyled = styled.div`

    background: purple;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 50 px;
    justify-items: center;
  
    .produit{
        background: red;
        width: 240px;
        height: 330px;
    }
  
  `;