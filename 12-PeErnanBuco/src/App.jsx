import { useState } from 'react'
import './App.css'
import Aprendiz from './components/Aprendiz'
import Frontenzo from './components/Frontenzo'
import Fullstack from './components/Fullstack'
function App() {
  const [pagina, setPagina] = useState(0)
  return (
    <div className="app">
      <nav>
        <button onClick={() => setPagina(0)}>Aprendiz</button>
        <button onClick={() => setPagina(1)}>Frontenzo</button>
        <button onClick={() => setPagina(2)}>Fullstack</button>

      </nav>
      <h1>Painel de Orações</h1>
      {pagina==0  && <Aprendiz />}
      {pagina==1  && <Frontenzo />}
      {pagina==2  && <Fullstack />}
    </div>
  )
}
export default App