import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//StrictMode ativa verificações, detecta problemas de renderização
//createBrowserRouter cria roteador do React Router com caminho da rota, componente que será renderizado, rotas filhas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/", element: <Home/>
      }
    ]
  }
])

//Renderizando a aplicação
//createRoot inicializa a aplicação React
//RouterProvider componente que serve como provedor de rotas da aplicação
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
