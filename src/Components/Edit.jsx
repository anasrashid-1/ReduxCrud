import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData, updateData } from '../Redux/action'

export default function Edit({data, setHide}) {
    
    const dispatch = useDispatch()
    const [inputtitle, setitle] = useState("")
    const inputRef = useRef()


    
 const handleSubmit = (e) => {
  
    e.preventDefault()

  const payload ={ ...data, title: inputtitle}

    dispatch( updateData(data.id, payload) ).then(()=>dispatch(getData)).then(()=>setHide(p=> !p))
 }



useEffect(()=>{

    setitle(data.title)
    inputRef.current.focus()

}, [])


    return (

    <div>
      
     <form onSubmit={handleSubmit}>
        <input  ref={inputRef} type="text" onChange={ (e)=> {setitle(e.target.value)}} value={inputtitle}  />
     </form>

    </div>
  )
}



