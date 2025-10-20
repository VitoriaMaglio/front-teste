import Usuarios from "../Usuarios/Usuarios";

export default function Home(){


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
Importar os componentes no App.tsx

--------- REFATORANDO CÓDIGO: Criando e separando rotas e componentes
Separar responsabiliDADES em componentes diferentes

Criar rotas Usuarios e CardUsuario
Passar toda lógica dos métodos de usuário para sua rota
Componente de card exibe o usuário e chama OnDelete quando clicar no botão
Recebe como props ent não precisa da lógica da api
Home apenas importa Usuarios e renderiza, assim fica limpo para ter outros componentes no futuro
Props=>


*/
    return(
        <>
        <Usuarios />
        </>
    );
}