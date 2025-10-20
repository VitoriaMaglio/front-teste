import { Link } from "react-router-dom";
export default function Rodape(){
    return(
        <footer>
            <h1>FacilitaReabi</h1>
            <nav>
                <Link to= "/" >Home</Link>
                <Link to= "/usuarios" >Usuários</Link>
            </nav>
        </footer>
    );
}