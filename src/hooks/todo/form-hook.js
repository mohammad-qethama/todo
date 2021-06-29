import {useState} from 'react';

const useForm = (props)=>{
  const [item,setItem]= useState({})

  const handleSubmit = (e)=> {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const rester = {};
    setItem(rester)
  }

  const handleInputChange = (e)=>{
    setItem({...item,[e.target.name]:e.target.value});

  }

  return(
    [item,handleInputChange,handleSubmit]
  )

}
export default useForm;