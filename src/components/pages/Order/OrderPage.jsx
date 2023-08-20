import { Link, useParams } from "react-router-dom";

export default function OrderPage() {

    //ETAT
   const { username } = useParams();
   
    //COMPORTEMENT

    //AFFICHAGE
    return (
      <div>
        <h1>Hello { username }</h1>
        <Link to="/">
            <button>Deconnexion</button>
        </Link>
      </div>
    )
  }
  
