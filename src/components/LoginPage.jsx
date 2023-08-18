import { useState } from "react"


function LoginPage(){

    //state
    const [inputValue, setInputValue] = useState("")

    //comportement
    const handleSubmit = (e) => {
        e.preventDefault()
      alert('hello ' + inputValue)

      setInputValue("")
    }

    const handleChange = (e) => {
      setInputValue(e.target.value)
    }
    
    

    //render

    return(

        <div>
            <h1>Bienvenue chez nous</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={ handleSubmit }>
                <input value={ inputValue } onChange={ handleChange } type="text" placeholder="Entrez votre nom..." required />
                <button>Subscribe</button>
            </form>
        </div>
    )
}

export default LoginPage