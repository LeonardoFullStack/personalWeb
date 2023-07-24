import { useState } from "react"


export const useForm = () => {

    let data = {

    };

    const handleChange = ({target}) => {
        data = {
            ...data,
            [target.name]:[target.value]
        }
        
    }
  return {
    handleChange,
    data
  }
    
  
}
