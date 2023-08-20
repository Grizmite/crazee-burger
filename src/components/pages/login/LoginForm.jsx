// LoginForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('hello ' + inputValue);
    setInputValue("");
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connexion</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre nom..." required />
        <button>Connectez-vous</button>
        <Link to="/order">Vers Order Page</Link>
      </form>
    </div>
  );
}

export default LoginForm;
