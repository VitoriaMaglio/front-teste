
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
    <Cabecalho />
      <div>
        <h1>Front teste</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/usuarios">Usuarios</Link>
        </nav>
        <Outlet/>
      </div>
      <Rodape/>
    </>
  )
}

export default App
