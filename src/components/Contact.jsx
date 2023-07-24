import React from 'react'
import { useForm } from '../hooks/useForm'

export const Contact = () => {
    const {handleChange} = useForm()
  return (
    <>
    <section className='contactForm'>

    <form onChange={handleChange}>
    <input name='email' type='text'/>
    <input name='name' type='text'/>
    <textarea name='message' type='text'/>
    <input type='submit' value='enviar'/>
    </form>

    </section>
    </>
  )
}
