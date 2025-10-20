
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'


function App() {
  return (
    <>
    <Cabecalho />
      <div>
        <h1>Front teste</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Outlet/>
      </div>
    </>
  )
}

export default App
