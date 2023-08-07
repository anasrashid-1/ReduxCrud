import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delData, getData, toggleData } from '../Redux/action'
import Edit from './Edit'

const Row = ({data, rowId}) => {

 const {id, title, status} = data


 const dispatch = useDispatch()
 const [hide, setHide] = useState(false)


const handleDelete = (id) => {

    dispatch(delData(id)).then(()=> dispatch(getData()) )
}

const toggleD = () =>{
  dispatch(toggleData(id)).then(()=> dispatch(getData()) )

}


  return (
    
    <div style={{ display:  "flex", justifyContent: "space-around", alignItems: "center"  }}>
        <h4>{rowId+1}</h4>
        {hide? <Edit  data={data} setHide={setHide}  /> :  <button>{title}</button>}
       
        <button  onClick={toggleD} >{status ? "Completed" : "Not Completed"  }</button> 
        <button onClick={ ()=> setHide((p)=> !p)  } >EDIT</button> 
        <button onClick={() => handleDelete(id)} >DELETE</button> 


    </div>
  )
}

export default Row


