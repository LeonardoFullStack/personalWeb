import React from 'react'

export const AboutMe = () => {

  return (
    <>

      <section className='aboutMeSection'>


        <section className='aboutMeHeader'>

          <h1>
            Un poco  sobre mí...
          </h1>

          <p>
            Soy una persona apasionada por la tecnología, la informática, la programación,
            la lógica, la física y varias cosas más.... Por desgracia no puedo dedicarle todo el tiempo que quisiera a todas
            mis pasiones, así que decidí que el aprendizaje de la programación sería mi prioridad, para poder
            convertirlo en una profesión que admiro.
          </p>

          <p>
            Sin embargo, si os apetece  saber algo de mis hobbys, adelante! Soys bienvenidos.

          </p>

        </section>

        <article className='resin'>

          <div className='titleBox'>

            <h3>
              Resina
            </h3>

          </div>

          <div className='contentBox'>

            <p>
              Una de mis pasiones es la carpintería con resina, donde he realizado varios
              proyectos aprendiendo por mi cuenta. Aquí tienes algunos:
            </p>

            <div className='projectDef'>
              <img alt='ajedrez de resina' src='images/resin/ajedrez.jpg' />
              <span>
                Este fué mi primer proyecto largo.Se trata de un juego de ajedrez de colores morado y mármol, donde tuve que rellenar cada molde por capas ( para crear el marmoleado del blanco y para la peana que es negra) y el tablero que tuve que crear cada cuadrado por separado, para luego ponerle un borde dorado.
              </span>
            </div>



            <div className='projectDef'>
              <img alt='Mesa con bandera de vinilo' src='images/resin/mesabandera.jpg' />
              <span>
                Aquí un ejemplo de como se puede poner cualquier imagen en vinilo, y al cubrir con resina transparente podemos plasmar una foto en cualquier superfície, sin preocuparnos de que el vinilo se despegue.          </span>
            </div>



            <div className='projectDef'>
              <img alt='Mueble violeta y negro' src='images/resin/mueblepc.png' />
              <span>
                Éste ha sido mi proyecto mas largo hasta ahora, también mi primer mueble. Se trata de una cajonera hecha con fibrapan, con todos los lados cubiertos de resina logrando un efecto de pintura vertida.
              </span>
            </div>



            <div className='projectDefLast'>
              <img alt='Mesa granito azul' src='images/resin/mesazalo.jpg' />
              <span>
                Y aquí mi proyecto mejor acabado. Se trata de una restauración de un mueble de recibidor, el cual pinté de negro, puse una plancha de madera encima y la cubrí de resina logrando un efecto de "granito azul"            </span>
            </div>

          </div>

        </article>

        <article className='pc'>
          <div className='titleBox'>

            <h3>
              Montaje de pc
            </h3>

          </div>

          <div className='contentBox'>

            <p>
              Como siempre me ha gustado el montaje de pc's y el hardware informático en general,
              hace 2 años decidí montarme un ordenador con "refrigeración líquida custom" que significa básicamente
              que tiene un circuito personalizado, donde debes diseñar tu mismo el circuito.
            </p>

            <div className='pcFotos'>
              <img alt='Componentes del pc por separado' src='images/pc/componentes.jpg' />
              <img alt='tarjeta gráfica abierta' src='images/pc/grafica.jpg' />
              <img alt='pc en construcción' src='images/pc/pc1.jpg' />
              <img alt='pc en construcción' src='images/pc/pc2.jpg' />
              <img alt='pc en construcción' src='images/pc/pc3.jpg' />
              <img alt='pc en construcción' src='images/pc/pc4.jpg' />
            </div>

          </div>
        </article>

        <section className='lastThings'>
          <p>
            En definitiva, me gusta la lógica,  la resolución de problemas y los retos que suponen trabajar como desarrollador.
            Les garantizo un entusiasmo enorme si deciden confiar en mis habilidades!
          </p>
        </section>

      </section>
    </>
  )
}
