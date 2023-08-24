//InputForm.jsx
import { styled } from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Input({ value, onChange, insertBeforeInput, ...extraProps }) {

  //AFFICHAGE
  return (
    <InputFormStyled>
        { insertBeforeInput }
        <input value={ value } onChange={ onChange } type="text" { ...extraProps } />
        </InputFormStyled>
  )
}

//STYLE
const InputFormStyled = styled.div`


  /*border: 1px solid red;*/
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; /*Peut être pris en charge par le parent */


.icon{
  font-size: 20px;
  margin-right: 8px;
  color: #93a2b1;
  
}

input{
  border: none;
  font-size: 15px;
  color: #17161a;
   width: 100%;
  display: flex;
}

&::placeholder{
  background: white;
  color: lightgrey;
}

`