// LoginForm.jsx
import { useState } from "react";
import { /*Link*/ useNavigate } from "react-router-dom";
import styled from "styled-components";
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
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre nom..." required />
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
`


export default LoginForm;
