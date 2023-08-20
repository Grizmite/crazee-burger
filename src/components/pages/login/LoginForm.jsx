// LoginForm.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {

  //STATE
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()

  //COMPORTEMENT
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert('hello ' + inputValue);
    setInputValue("");
    navigate(`order/${inputValue}`)
    
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
//AFFICHAGE
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connexion</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre nom..." required />
        <button>Connectez-vous</button>
      </form>
    </div>
  );
}

export default LoginForm;
