// LoginForm.jsx
import { useState } from "react";
import { /*Link*/ useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs"
//import { theme } from "src/components/theme/index.js"

function LoginForm() {

  //STATE
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()

  //COMPORTEMENT
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`)
    
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
//AFFICHAGE
  return (
    <div>
      <LoginFormStyle action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre nom..." required />
        </div>
        <button>Connexion</button>
      </LoginFormStyle>
    </div>
  );
}

const LoginFormStyle = styled.div`
background: green;
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 2.5rem 2rem;
border-radius: 5px;
font-family: "Amatic SC", cursive;

hr{
  border: 1.5px solid #f56a2c;
  margin-bottom: 40px;
}

h1{
  color: white;
  font-size: 48px;
}

h2{
  color: #8e8b8b;
  margin: 20px 10px 10px;
  color: white;
  font-size: 36px;
}

.input-with-icon{
  /*border: 1px solid red;*/
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; /*Peut être pris en charge par le parent */
}

.icon{
  font-size: 15px;
  margin-right: 8px;
  color: #93a2b1;
}

input{
  border: none;
  font-size: 15px;
  color: #17161a;
  /* width: 100%;
  display: flex; */
}

&::placeholder{
  background: white;
  color: lightgrey;
}
`


export default LoginForm;
