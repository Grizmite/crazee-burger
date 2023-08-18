// LoginForm.jsx
import { useState } from "react";

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
        <h1>Bienvenue chez nous</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre nom..." required />
        <button>Subscribe</button>
      </form>
    </div>
  );
}

export default LoginForm;