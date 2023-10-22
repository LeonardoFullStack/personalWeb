import React, { useState } from 'react'

export const Project = ({index}) => {
    
    const [pageImg, setPageImg] = useState(0);
    
    const webImps = [
        [
            'imps/tweethelp1.png',
            'imps/tweethelp2.png',
            'imps/tweethelp3.png',
        ],
        [
            'imps/sportpress1.png',
            'imps/sportpress2.png',
            'imps/sportpress3.png',
        ],
        [
            'imps/blue1.png',
            'imps/blue2.png',
            'imps/blue3.png',
        ],
        [
            'imps/serv1.png',
            'imps/serv2.png',
            'imps/serv3.png'
        ],
        [
            'imps/carrito1.png',
            'imps/carrito2.png',
            'imps/carrito3.png',
        ],
        [
            'imps/todo1.png',
            'imps/todo2.png',
            'imps/todo2.png',
        ]
    ];

    const descriptions = [
        [
            'TweetHelp, es una pequeña red social de mensajes cortos con imágenes al estilo de X. Cada usuario puede publicar entradas, con imágen o sin imágen, tienen perfil público y pueden seguir a otros usuarios para tener un feed personalizado.Es un proyecto puramente de Node, utilizando plantillas EJS para el front y una base de datos SQL en el back.Es un proyecto conjunto con @Lauradev , dónde ella se ha encargado de toda la parte del diseño y del enfoque de usuario. '
        ],
        [
            'Esto es el proyecto personal final de el bootcamp. Se trata de una página de noticias deportivas que tiene un funcionamiento basado en los roles de los usuarios. Los colaboradores pueden proponer noticias, el editor escoge y las publica, el usuario corriente únicamente puede comentar las noticias publicadas, y el moderador puede eliminar comentarios y banear usuarios para que no puedan comentar más.  Para terminar, el administrador gestiona los roles, ascendiendo o degradando según le convenga.'
        ],
        [
            'Un proyecto en grupo con la gente de UX/UI, Data Science y Ciberseguridad de la escuela The Bridge. Trata de un proyecto para concienciar sobre el gasto de el agua, calculando tu huella hídrica con un questionario. Con este proyecto aprendí a trabajar de una manera "profesional" con un gestionamiento del trabajo de tipo SCRUM y realizando las respectivas reuniones con las diferentes verticales para llegar a un producto final. Al realizar el questionario, se proponen unos retos de reducción de consumo en base a las respuestas del questionario.'
        ],
        [
            'Es un proyecto sencillo donde simplemente se escriben servicios deseados por un usuario registrado, luego se pueden consultar esos servicios, haciendo uso de una base de datos de MongoDB. El administrador puede eliminar o editar los servicios a su antojo.Con éste proyecto de Node aprendí a utilizar el scrapping de una manera simple. Fué mi primer proyecto con Node y bases de datos, y aquí aprendí bien la diferencia entre front y back.'
        ],
        [
            'Se trata de un carrito de la compra basado en los JSON de que tiene la api de prueba gratuita DUMMY JSON. Al pulsar el botón finalizar compra, lleva a una página donde se muestran los productos seleccionados en una tabla. También se pueden ver en un pop-up emergente al pulsar el icono del carrito. Mi intención a posteriori es añadir pagos por pay-pal para tener práctica con las herramientas de pago.'
        ],
        [
            'Fué nuestro primer proyecto con React. Es una "to do list" con los datos almacenados en el local storage. Aquí aprendí a usar la metodología básica de React (hooks, etc.). Para entrar el login es email: paco@gmail.com y la password es "123"'
        ]
    ]
    
    const tecnologies = [
        [
            'Node js',
            'Express',
            'EJS templates',
            'Cookie-parser',
            'Multer',
            'Jsonwebtoken',
            'Mongoose'

        ],
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
            'React',
            'Node js',
            'Express',
            'React redux',
            'jest',
            'Postgre',
            'Jsonwebtoken',
            'Bcrypt',
            'Jsdoc',
        ],
        [
            'Node Js',
            'Express',
            'Mongoose',
            'Bcrypt',
            'Jsonwebtoken',
            'Jsdoc'
        ],
        [
            'JavaScript Vanilla',
            'CSS'
        ],
        [
            'React',
        ]
    ]

    const links = [
        [
            'https://github.com/Leonardo-Full-Stack/MINITWITTER',
            'https://minitwitter-x2oo.onrender.com/'
        ],
        [
            'https://github.com/LeonardoFullStack/sportPress-Front',
            'https://sportpress.netlify.app/'
        ],
        [
            'https://github.com/DREWiex/huelladelagua-front',
            'https://lahuelladelagua.netlify.app/quiz'
        ],
        [
            'https://github.com/LeonardoFullStack/API-REST',
            'https://mongo-services-5o67.onrender.com'
        ],
        [
            'https://github.com/LeonardoFullStack/carrito',
            'https://carrito-de4s.onrender.com'
        ],
        [
            'https://github.com/LeonardoFullStack/toDoTask',
            'https://enchanting-salmiakki-aa051a.netlify.app'
        ],
        [

        ]
    ]

    const titles = [
        'TweetHelp',
        'SportPress',
        'Huella del agua',
        'Servicios',
        'Carrito',
        'To do list'
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
        <a className='descriptionButtons' target='blank' href={links[index][0]}>
                
                <img src='images/githubicon.png'/>
                <span>
                    Repositorio
                </span>
                
            </a>

            <a className='descriptionButtons' target='blank' href={links[index][1]}>
                <img src='images/despliegue.png'/>
                <span>
                    Despliegue
                </span>
            </a>
        </div>

            
        </div>
    </section>
  )
}
