import Brand from "./componentes/Brand"
import BotondeMenu from "./componentes/BotondeMenu"
import SeccionesItem from "./componentes/SeccionesItem"
import ImagenCarrito from './componentes/ImagenCarrito'
import ContenedorCarrito from './componentes/ContenedorCarrito'
import Contador from './componentes/Contador'

import './App.css'

function App() {
  

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Brand/>
    <BotondeMenu/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <SeccionesItem/>
        <a class="nav-link active" aria-current="page" href="#">Alimento</a>
        <a class="nav-link active" aria-current="page" href="#">Accesorios</a>
        <a class="nav-link active" aria-current="page" href="#">Cuchas</a>
        <a class="nav-link active" aria-current="page" href="#">Desparacitantes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
    <ImagenCarrito/>
    <itemListConteiner greeting = " Hola Buen dia!!"/>
  </div>
</nav>
    </div>
      
  )
}

export default App;
