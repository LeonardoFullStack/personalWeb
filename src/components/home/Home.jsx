import React from 'react'
import { Badges } from '../Badges'
import { NavLink } from 'react-router-dom'

export const Home = () => {

  const badgeList = [
    {
      name: 'Backend',
      url: 'badges/backend.png'
    },
    {
      name: 'css',
      url: 'badges/css.png'
    },
    {
      name: 'devOps',
      url: 'badges/devops.png'
    },
    {
      name: 'docker',
      url: 'badges/docker.png'
    },
    {
      name: 'es6',
      url: 'badges/es6.png'
    },
    {
      name: 'express',
      url: 'badges/express.png'
    },
    {
      name: 'firebase',
      url: 'badges/firebase.png'
    },
    {
      name: 'frontend',
      url: 'badges/frontend.png'
    },
    {
      name: 'github',
      url: 'badges/github.png'
    },
    {
      name: 'kubernetes',
      url: 'badges/kubernetes.png'
    },
    {
      name: 'mongodb',
      url: 'badges/mongodb.png'
    },
    {
      name: 'node',
      url: 'badges/node.png'
    },
    {
      name: 'poo',
      url: 'badges/poo.png'
    },
    {
      name: 'react',
      url: 'badges/react.png'
    },
    {
      name: 'SQL',
      url: 'badges/sql.png'
    },
    {
      name: 'webDev',
      url: 'badges/webdev.png'
    }


  ]
  return (
    <>
      <section className='homeTop'>
        <article className='linkArticle'>
          <div className='title'>
            Enlaces
          </div>
          <div className='content'>
            <a target='blank' href='https://github.com/LeonardoFullStack' className='linkContainer'>
              <img src='images/githubicon.png' />
              <span>
                GitHub
              </span>
            </a>
            <a target='blank' href='https://www.linkedin.com/in/leonardo-esteve-perales-b0845827a/' className='linkContainer'>
              <img src='images/linkedinlogo.jpg' />
              <span>
                LinkedIn
              </span>
            </a>
            <a target='blank' href='cv/mainCV.pdf' className='linkContainer'>
              <img src='images/cvicon.png' />
              <span>
                CV spanish
              </span>
            </a>
            <a target='blank' href='cv/CV-LEONARDO-EN.pdf' className='linkContainer'>
              <img src='images/cvicon.png' />
              <span>
                CV english
              </span>
            </a>
          </div>
        </article>
        <article className='cvArticle'>
          <div className='title'>
            Foto
          </div>
          <div className='content'>
            <img src='cv/fotocv2.jpeg' />
          </div>

        </article>
        <article className='description'>
          <div className='title'>
            Perfil
          </div>
          <div className='content'>
            <p>
              ¡Hola! Soy Leonardo, un apasionado desarrollador web junior con una especialización destacada en el <span className='bolder'>stack MERN</span> y experiencia sólida en bases de datos <span className='bolder'>SQL</span>. Mi objetivo es crear experiencias digitales impactantes y funcionales que impulsen la interacción y la eficiencia.</p>

            <p>En este espacio, te invito a explorar mi portfolio, donde podrás encontrar una variedad de proyectos que abarcan desde <span className='bolder'>aplicaciones web dinámicas hasta sitios web responsivos</span>. Cada proyecto representa un desafío que he enfrentado con creatividad y dedicación.</p>

            <p>Además de mis habilidades técnicas, también cuento con una serie de capacidades que complementan mi perfil como profesional. Mi enfoque meticuloso en la resolución de problemas y la atención al detalle me permite abordar cada proyecto con un alto nivel de precisión y calidad.</p>

            <p>Pero mi alcance no se limita solo al código. También tengo una pasión por la comunicación efectiva y la <span className='bolder'>colaboración en equipo</span>. Creo firmemente en la importancia de la comunicación clara y la coordinación para lograr resultados excepcionales.
            </p>
          </div>
        </article>
      </section>
      {/* <section className='mainInfo'>
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
    </section> */}

      <section className='badgeSection'>
        <div className='badgesTitle'>
          <h1>
            Métodos y tecnologías
          </h1>
        </div>
        <div className='badges'>
          {badgeList.map((item) => (

            <Badges key={item.name} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
