import React from 'react'
import TodoInput from '../Components/TodoInput'
import Row from '../Components/Row'
import Nav from '../Components/Nav'
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getData } from '../Redux/action'

const HomePage = () => {
 
const dispatch = useDispatch()

const {todos }  = useSelector((store)=> store.reducer)

 console.log(todos)


  useEffect(()=>{

    dispatch(getData()) 

}, [])

  
   
  return (
    
    <div style={{ width : "60%", margin: "auto", border: "3px solid black" }}>
      <h1>CRUD APP</h1>
       
       <Nav/>
      <TodoInput/>
     {

      todos?.reverse().map((item, i)=>(
         <Row data={item}  key={item.id} rowId={i} />
      ))

     }

    </div>
  )
}

export default HomePage
