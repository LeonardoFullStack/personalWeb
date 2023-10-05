import React, { useState } from 'react'
import { Project } from './Project'

export const Projects = () => {

  const [projectSelected, setProjectSelected] = useState(1);

  const selected = (number) => {
    setProjectSelected(number)
  }
  return (
    <>
    <section className='projectsSection'>
    <div className='projects'>
    <h1>
      Mis proyectos
    </h1>

    <p>
      Aquí muestro los distintos proyectos que he realizado a través del bootcamp en The Bridge. 
      Podrán ver las tecnologías utilizadas, definición/utilidad del proyecto y algunas capturas de pantalla.
      Hay que tener en cuenta que los back-ends y algunos fronts están subidos en render.com, que es una plataforma que puede tardar hasta 3 minutos en cargar si la web no se ha visitado recientemente, además de algún que otro error de carga sin solución por mi parte...Pero en máximo 3-5 minutos todos funcionan perfectamente!Disculpad!
    </p>
    {/* carrito de la compra, to do's, mcmovies, huella del agua, sportpress, twitzerg */}
    <div className='projectSelect'>

    <button onClick={()=>selected(1)}>
      SportPress
    </button>

    <button onClick={()=>selected(2)}>
      Tweethelp
    </button>

    <button onClick={()=>selected(3)}>
      Huella del agua
    </button>

    <button onClick={()=>selected(4)}>
      Servicios
    </button>

    <button onClick={()=>selected(5)}>
      Carrito 
    </button>

    <button onClick={()=>selected(6)}>
      To do's
    </button>

    </div>

     </div>

    <Project index={projectSelected - 1}/>
    </section>
    </>
  )
}
