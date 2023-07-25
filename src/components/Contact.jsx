import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const Contact = () => {
  const { handleChange, handleSubmit } = useForm()
  const [submitted, setSubmitted] = useState('No')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <section className='contactSection'>

        <h3>
          Contacto
        </h3>

        <p>
          Si tienes alguna pregunta, comentario o estás interesado en mis servicios, puedes dejarme tus datos y me pondré en contacto contigo con la mayor brevedad posible.
        </p>
        <div className='contactForm'>
          <form onChange={handleChange} onSubmit={(ev) => handleSubmit(ev, setSubmitted, setIsLoading)}>
            <input name='email' placeholder='Email' type='text' />
            <input name='name' placeholder='Nombre' type='text' />
            <textarea name='text' placeholder='Mensaje' type='text' />
            <div>
            
            {
              isLoading == true ?
              <img src='images/loading.gif'/>
              :
              <input type='submit' value='enviar' />
            }
            </div>
          </form>

          {submitted == 'submitted' &&
            <span>
              El mensaje se ha envíado con éxito. En breves me pondré en contacto contigo!
            </span>
          }

          {submitted == 'failed' &&
            <span>
              Ha habido un error al enviar el correo. Pruébalo de nuevo mas tarde o si lo prefieres, envíame un correo a esteveleonardo@gmail.com.
            </span>
          }

          {submitted == 'incomplete' &&
            <span>
              Debes completar los campos.
            </span>
          }
        </div>
      </section>
    </>
  )
}
