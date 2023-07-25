import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {

    const [burguerOpen, setBurguerOpen] = useState(false);


    const handleBurguer = () => {
        setBurguerOpen(!burguerOpen);
    }

  return (
    <header className="mainHeader">
      <div className="logoHeader">
      <img alt="logo de la empresa" src="images/logo1.png"/>
      </div>
    <div className="burguer">
    <span className="material-symbols-outlined burguerIcon" onClick={handleBurguer}>
    menu
    </span>
    </div>
    <div className="burguerOpen hidden">
    <NavLink to='/' className='navLink'
          
    >Home
    </NavLink>
    <NavLink to='/about' className='navLink'
          
    >Sobre mí
    </NavLink>
    <NavLink to='/projects' className='navLink'
          
    >Proyectos
    </NavLink>
    <NavLink to='/contact' className='navLink'
          
    >Contacto
    </NavLink>
    </div>
    {
        burguerOpen && 
        <div className="burguerOpen activo">
    <NavLink to='/' className='navLink' onClick={handleBurguer}
          
    >Home
    </NavLink>
    <NavLink to='/about' className='navLink' onClick={handleBurguer}
          
    >Sobre mí
    </NavLink>
    <NavLink to='/projects' className='navLink' onClick={handleBurguer}
          
    >Proyectos
    </NavLink>
    <NavLink to='/contact' className='navLink' onClick={handleBurguer}
          
    >Contacto
    </NavLink>
    </div>
    }
    </header>
  )
}
