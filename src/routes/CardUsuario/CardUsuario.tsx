interface CardUsuarioProps {
  user: { id: number; login: string; senha: string };
  onDelete: (login: string) => void;
}
//Interface define os tipos de dados que o componente espera receber.
//onDelete função que recebe login do usuário
export default function CardUsuario({ user, onDelete }: CardUsuarioProps) {
//Props são dados passados de outro componente para o card, permitem delegar responsabilidades
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
