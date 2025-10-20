import { Link } from "react-router-dom";
export default function Rodape(){
    return(
        <footer >
            <h2>FacilitaReabi</h2>
            <nav className= "menu">
                <Link to= "/" >Home</Link>
                <Link to= "/usuarios" >Usuários</Link>
            </nav>
        </footer>
    );
}