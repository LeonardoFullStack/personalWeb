import { useState } from "react"

const urlBack = 'https://api-mongo-e4rt.onrender.com/api/v1/mail'
//http://localhost:4001/api/v1/mail

export const useForm = () => {

  const [data, setData] = useState({
    email: "",
    name: "",
    text: "",
  });

  const handleChange = ({ target }) => {
    let newData = {
      ...data,
      [target.name]: target.value
    }
    setData(newData)

  }

  const handleSubmit = async (ev, setSubmitted, setIsLoading) => {
    ev.preventDefault()

    if (data.name.length < 2 || data.text.length < 2 || data.email.length < 5) {
      setSubmitted('incomplete')
      return
    }

    const options = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    }

    try {
      setIsLoading(true);
      const call = await fetch(urlBack, options)
      const response = await call.json()

    if (response.ok) {
      setSubmitted('submitted')
      setIsLoading(false);
    } else {
      setSubmitted('failed')
      setIsLoading(false);
    }

    } catch (error) {

      setSubmitted('failed')
      
    }

  
  }


  return {
    handleChange,
    data,
    handleSubmit
  }



}
