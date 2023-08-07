import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData, postData } from '../Redux/action'


const TodoInput = () => {

  const [input, setInput] = useState("")
  
  const dispatch = useDispatch()
  

  const handleSubmit = (e) =>{
    
    e.preventDefault()

    const payload ={
        title : input,
        status: false
    }

    dispatch( postData(payload)).then(()=> dispatch(getData()) )
    setInput("")

  }
  
  
    return (
    <div>
       

       <form action=""  onClick={handleSubmit}>
          
          <input onChange={(e)=> setInput(e.target.value)} type="text" />
          <input type="submit" />

       </form>



    </div>
  )
}

export default TodoInput

