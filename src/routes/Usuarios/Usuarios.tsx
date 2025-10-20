import api from "../../services/Api";
import { useState, useEffect, useRef } from "react";
import CardUsuario from "../CardUsuario/CardUsuario";

interface User {
  id: number;
  login: string;
  senha: string;
}

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);

  const inputLogin = useRef<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    getUsers();
  }, []);

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
