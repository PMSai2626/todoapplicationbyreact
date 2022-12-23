import React from 'react'
import "./App.css"

const Todolist = ({todo,onDelet}) => {
  return (
    <div className="todo-back" >
      {todo.map((item,index) =>
      <div key={index}  >
        <h1 className='todo-heading'>{item} &nbsp; <button onClick={() => onDelet(index)} className="delete" >Delete Item</button></h1> </div> )}
    </div>
  )
}

export default Todolist
