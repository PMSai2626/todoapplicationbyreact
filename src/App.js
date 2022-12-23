import React,{useState} from 'react'
import Todolist from './Todolist'

const App = () => {
  const [task,setTask] = useState("")
  const [todo,setTodos] = useState([])

  const onChangeHandler =  e =>{
    setTask(e.target.value)
  }
  const onSumitHandler = e => {
    e.preventDefault();
    const newTodo = [...todo,task];
    setTodos(newTodo)
    setTask("")
    if (task === ""){
      alert("plzz enter a item") }
  }

  const   onDelet = (indexValue) =>{
    const newTodo = todo.filter((todo,index) => index !== indexValue);
  setTodos(newTodo)}


  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h1 className='title'>Todo Application</h1>
            <form onSubmit={onSumitHandler}>
              <input type = "text" name = "task" value={task} placeholder="Enter your item" onChange={onChangeHandler} className="input" /> &nbsp;&nbsp;
              <button type = "submit" name='add' className='add'  >ADD</button>
             </form>
             <Todolist todo={todo}  onDelet={onDelet} />
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
