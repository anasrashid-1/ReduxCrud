import React from 'react'
import { useSelector } from 'react-redux'


const Nav = () => {
  
  const todos  = useSelector((store)=> store.reducer.todos)

  const completed = todos.filter((el)=> el.status === true)
  const Notcompleted = todos.filter((el)=> el.status === false)
  console.log(completed)
  
    return (
    <div>
       <button>Total: {todos.length}</button>
       <button>Completed: {completed.length}</button>
       <button>Not Completed: {Notcompleted.length}</button>
     


    </div>
  )
}

export default Nav
