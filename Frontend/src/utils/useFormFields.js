import React,{useState,useDebugValue} from 'react'

export default function useFormFields() {
    const [fields, setFields] = useState();
    const handleChange = (e) => {
    const { target } = e;
    setFields({ ...fields, [target.name]: target.value });
  };
  useDebugValue(fields)
  return [fields,handleChange]
}
