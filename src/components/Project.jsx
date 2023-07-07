import React, { useState } from 'react'

export const Project = ({index}) => {
    
    const [pageImg, setPageImg] = useState(0);
    console.log(index)
    const webImps = [
        [
            'imps/sportpress1.png',
            'imps/sportpress2.png',
            'imps/sportpress3.png',
        ],
        [
            'imps/sportpress1.png',
            'badges/css.png',
            'imps/sportpress1.png',
        ]
    ];

    const descriptions = [
        [
            'Esto es el proyecto personal final de el bootcamp. Se trata de una página de noticias deportivas que tiene un funcionamiento basado en los roles de los usuarios. Los colaboradores pueden proponer noticias, el editor escoge y las publica, el usuario corriente únicamente puede comentar las noticias publicadas, y el moderador puede eliminar comentarios y banear usuarios para que no puedan comentar más.  Para terminar, el administrador gestiona los roles, ascendiendo o degradando según le convenga.'
        ],
        [
            'Es un blog corriente, donde hay un login que es requerido para poder publicar y editar noticias (solo las suyas). Los usuarios no registrados pueden acceder a las noticias, pero no pueden publicar. Existe también un administrador, que puede eliminar y editar noticias aunque no sean suyas. Utiliza multer para poder subir imágenes, y la idea a posteriori es poder añadir comentarios y tags, para parecerse un poco a Twitter.'
        ]
    ]
    
    const tecnologies = [
        [
            'React',
            'Node js',
            'Express',
            'React redux',
            'jest',
            'React-google-recaptcha',
            'Postgre',
            'Jsonwebtoken',
            'Auth0',
            'Bcrypt',
            'Cloudinary',
            'Jsdoc',
            'Sass'
        ],
        [

        ]
    ]
    const setPage = (action) => {
        if (action == 'back') {
            if (pageImg == 0) {
                setPageImg(2)
            } else {
                const newPageImg = pageImg - 1
                setPageImg(newPageImg)
            }
            
        }

        if (action == 'next') {
            if (pageImg == 2) {
                setPageImg(0)
            } else {
                const newPageImg = pageImg + 1
                setPageImg(newPageImg)
            }
            
        }
    }

    const titles = [
        'SportPress',
        'Blog',
        'Huella del agua',
        'McMovies',
        'Carrito',
        'To do list'
    ]

    const links = [
        [
            'https://github.com/LeonardoFullStack/sportPress-Front',
            'https://earnest-swan-354ba3.netlify.app/'
        ],
        [
            'https://github.com/LeonardoFullStack/sportPress-Front',
            'https://earnest-swan-354ba3.netlify.app/'
        ]
    ]

    console.log(links[index][1])
  return (
    <section className='singleProject'>
        <div className='projectTitle'>
            <h1>
                {titles[index]}
            </h1>
        </div>

        <div className='projectDescription'>
            <div className='projectSlider'>
                <span onClick={()=>setPage('back')} className="material-symbols-outlined simbol">
                    arrow_back_ios
                </span>

                <img src={webImps[index][pageImg]} alt='Captura de pantalla de la web'/>

                <span onClick={()=>setPage('next')} className="material-symbols-outlined simbol">
                    arrow_forward_ios
                </span>
            </div>
            <div className='webDescription'>
                <div className='webDescriptionTitle'>
                    <h3>
                        Una breve descripción
                    </h3>
                </div>

                <div className='webDescriptionContent'>
                    <p>
                        {descriptions[index]}
                    </p>
                </div>
            </div>
            

        <div className='usedTechs'>
            <div className='usedTechsTitle'>
                <h3>
                Tecnologías utilizadas:
                </h3>
            </div>

            <div className='usedTechsContent'>
            <ul>
            {tecnologies[index].map((item)=>(
                <li>
                    {item}
                </li>
            ))}
            </ul>
            </div>
        </div>

        <div className='links'>
        <a target='blank' href={links[index][0]}>
                <button>
                <img src='images/githubicon.png'/>
                <span>
                    Repositorio
                </span>
                </button>
            </a>

            <a target='blank' href={links[index][1]}>
                <button>
                <img src='images/despliegue.png'/>
                <span>
                    Despliegue
                </span>
                </button>
            </a>
        </div>

            
        </div>
    </section>
  )
}
