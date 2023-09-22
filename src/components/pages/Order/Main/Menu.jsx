import { useState } from 'react';
import { styled } from 'styled-components';
import { fakeMenu1 } from '../../../../fakeData/fakeMenu';


export default function Menu() {
  
        //Etat
        const [products, setProducts] = useState(fakeMenu1);

        //comportement
  
        //Affichage
    return (

    <MenuStyled>
        
    </MenuStyled>
  )
}


const MenuStyled = styled.div`

    background: purple;
  
  
  `;