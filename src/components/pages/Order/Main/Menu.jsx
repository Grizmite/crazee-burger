import { useState } from 'react';
import { styled } from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu';
import Product from './product';


export default function Menu() {
  
        //Etat
        const [menu, setMenu] = useState(fakeMenu2);

        //comportement
  
        //Affichage
    return (

    <MenuStyled>

    

        {menu.map((produit) => {
           return (

            <Product title={produit.title} price={produit.price} key={produit.id} imageSource={produit.imageSource} />

           )
           
        })}
    </MenuStyled> 
  )
}


const MenuStyled = styled.div`

    background: #F5F5F7;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150 px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  
    .produit{
        background: red;
        width: 240px;
        height: 330px;
    }

    .image{

        width: 100px;
        height: auto;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid blue;

        }
        
    }

    .description{
            border: 1px solid blue;
        }
  
  `;