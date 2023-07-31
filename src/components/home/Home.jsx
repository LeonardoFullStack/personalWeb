import React from 'react'
import { Badges } from '../Badges'
import { NavLink } from 'react-router-dom'

export const Home = () => {

  const badgeList = [
    {
      name:'Backend',
      url:'badges/backend.png'
    },
    {
      name:'css',
      url:'badges/css.png'
    },
    {
      name:'devOps',
      url:'badges/devops.png'
    },
    {
      name:'docker',
      url:'badges/docker.png'
    },
    {
      name:'es6',
      url:'badges/es6.png'
    },
    {
      name:'express',
      url:'badges/express.png'
    },
    {
      name:'firebase',
      url:'badges/firebase.png'
    },
    {
      name:'frontend',
      url:'badges/frontend.png'
    },
    {
      name:'github',
      url:'badges/github.png'
    },
    {
      name:'kubernetes',
      url:'badges/kubernetes.png'
    },
    {
      name:'mongodb',
      url:'badges/mongodb.png'
    },
    {
      name:'node',
      url:'badges/node.png'
    },
    {
      name:'poo',
      url:'badges/poo.png'
    },
    {
      name:'react',
      url:'badges/react.png'
    },
    {
      name:'SQL',
      url:'badges/sql.png'
    },
    {
      name:'webDev',
      url:'badges/webdev.png'
    }


  ]
  return (
    <>
    <section className='mainInfo'>
      <div className='mainInfoImg'>
       <img className='companyLogoName' alt='logo de la empresa' src='images/devimg.png'/> 
      </div>     
      <div className='mainDescription'>
        <a className='anchorButtons' href='https://github.com/LeonardoFullStack' target='blank'>
          
            <img src='images/githubicon.png'/>
            <span>
              Portfolio
            </span>
        </a>

        <a className='anchorButtons' href='https://www.linkedin.com/in/leonardo-esteve-perales-b0845827a/' target='blank'>
          
            <img src='images/linkedinlogo.jpg'/>
            <span>
              Linkedin
            </span>
        </a>
        <NavLink to='/contact' className='navLink anchorButtons'
          
        >
        
        <img src='images/mailicon.png'/>
        <span>
          Contacto
        </span>
        </NavLink>
          
        
      </div>
    </section>
    <section className='myDescription'>
      <div className='titleDescription'>
        <h1>
        Sobre mí
        </h1>
      </div>
    <div className='descriptionContent'>
      <p>
          Soy Leonardo, un desarrolador web junior especializado en el stack MERN y las 
          bases de datos SQL. En ésta página podréis ver mi portfolio, información sobre mí y
          otras habilidades no tan relacionadas con la programación.
      </p>
    </div>
    
    </section>
    <section className='badgeSection'>
      <div className='badgesTitle'>
    <h1>
      Métodos y tecnologías 
    </h1>
    </div>
    <div className='badges'>
      {badgeList.map((item)=> (
        
        <Badges key={item.name} item={item}/>
      ))}
    </div>
    </section>
    </>
  )
}
