
import { styled } from "styled-components";


export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled className="button-with-icon">
        <span>{ label }</span>
        { Icon }
        </PrimaryButtonStyled>
  )
}


//STYLE

const PrimaryButtonStyled = styled.button'

    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
  
    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  
    &:hover:not(:disabled){
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }
  
    &:active{
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }
  
  
  .icon{
    font-size: 20px;
    margin-right: 8px;
    color: #93a2b1;
    
  }
  ';