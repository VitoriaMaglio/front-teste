import api from "../../services/Api";
import { useState, useEffect, useRef } from "react";
import CardUsuario from "../CardUsuario/CardUsuario";

//Interface define como são os tipos de dados um usuário tipando o useSatate
interface User {
  id: number;
  login: string;
  senha: string;
}

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);
//var que guarda usuários, função que atualiza
  const inputLogin = useRef<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);
//useRef cria referência para elementos HTML (inputs).

//funções assíncronas para comunicação com API
//await espera a resposta da API 
  async function getUsers() {
    try {
      const response = await api.get("/usuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function createUsers() {
    await api.post("/usuarios", {
      login: inputLogin.current?.value,
      senha: inputSenha.current?.value,
    });
    getUsers();
  }

  async function deleteUsers(login: string) {
    await api.delete(`/usuarios/${login}`);
    getUsers();
  }

//useEffect executa efeitos colaterais-> buscar usuários ao montar componente
  useEffect(() => {
    getUsers();
  }, []);//roda apenas uma vez quando o componente é renderizado pela primeira vez.

  //map percorre cada usuário e cria um card
  //chamar getUsers() para atualizar a lista na tela
  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Login" type="text" ref={inputLogin} />
        <input placeholder="Senha" type="text" ref={inputSenha} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <CardUsuario key={user.id} user={user} onDelete={deleteUsers} />
      ))}
    </div>
  );
}
