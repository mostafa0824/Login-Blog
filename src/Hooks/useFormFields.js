import { useState } from "react"

const useFormFields=(initialState={})=>{
    const [fields,setFields]=useState(initialState)
    const handleChange=(e)=>{
    setFields({...fields,[e.target.name]:e.target.value})
    }
    return [fields,handleChange]
}
export default useFormFields