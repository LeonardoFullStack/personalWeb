import { Router } from "./routers/Router";
import { NavLink } from 'react-router-dom'


function App() {


  return (
    <>
    <header className="mainHeader">
      <div className="logoHeader">
      <img alt="logo de la empresa" src="images/logo1.png"/>
      </div>
    <div className="burguer">
    <span className="material-symbols-outlined burguerIcon">
    menu
    </span>
    </div>
    <div className="burguerOpen">
    <NavLink to='/' className='navLink'
          
    >Home
    </NavLink>
    <NavLink to='/about' className='navLink'
          
    >Sobre mí
    </NavLink>
    <NavLink to='/projects' className='navLink'
          
    >Proyectos
    </NavLink>
    <NavLink to='/about' className='navLink'
          
    >Contacto
    </NavLink>
    </div>
    </header>

    <main>
    <Router/>
    </main>
    
    <footer>

    </footer>
    </>
  )
}

export default App;

