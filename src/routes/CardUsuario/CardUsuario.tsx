interface CardUsuarioProps {
  user: { id: number; login: string; senha: string };
  onDelete: (login: string) => void;
}

export default function CardUsuario({ user, onDelete }: CardUsuarioProps) {
  return (
    <div className="card">
      <div>
        <p>Login: {user.login}</p>
        <p>Senha: {user.senha}</p>
      </div>
      <button type="button" onClick={() => onDelete(user.login)}>
        Excluir
      </button>
    </div>
  );
}
