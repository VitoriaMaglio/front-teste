import api from "../../services/Api";
import { useState, useEffect, useRef } from "react";

export default function Home(){

 interface User {
  id: number;
  login: string;
  senha: string;
}

//const   valor atual, função que atualiza e renderiza
const [users, setUsers] = useState<User[]>([]);

const inputLogin= useRef<HTMLInputElement>(null);
const inputSenha = useRef<HTMLInputElement>(null);


    async function getUsers(){
        try {
            const response = await api.get("/usuarios");
            setUsers(response.data); // atualiza o state → re-renderiza a tela
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    }

    async function createUsers(){
    console.log(inputLogin)
    await api.post("/usuarios", {
        login: inputLogin.current?.value,
        senha: inputSenha.current?.value
    })
    getUsers
    }

     async function deleteUsers(login: string){
        await api.delete(`/usuarios/${login}`);
        getUsers
    }



 useEffect(() => {
    getUsers();
  }, []);
/*
Tudo acima de retunr é javascript
Tudo dentro de return é react
Porém se colocarmos o código js dentro de chaves{} ele pode ser usado dentro do código react.
Map percorre cada item de array, os users mockados 
=> errow function
key map para identificar os items = id no array 
Função assíncrona
Interface pq typescript não conhece os tipos dos dados
React Hooks->
useState hook que cria uma var que quando muda dispara re-render
useEffect hook que permite executar efeitos colaterais como buscar dados da API
useReff colocar um elemento como referência e utilizar
*/
    return(
        <>
        <div className="container">
            <form >
                <h1>Cadastro de usuários</h1>
                <input placeholder="Login" type="text" name="login"  ref={inputLogin}/>
                <input placeholder="Senha" type="text" name="senha" ref={inputSenha} />
                <button type="button" onClick={createUsers}>Cadastrar</button>
            </form>
            

            {users.map(user => (
                <div key={user.id} className="card">
                    <div>
                        <p>Login:{user.login}</p>
                        <p>Senha:{user.senha}</p>
                    </div>
                    <button type="button" onClick={()=>deleteUsers(user.login)}>
                    </button>
                </div>
            ))}
            
        
        </div>
        </>
    );
}