import React,{useState,useEffect} from 'react'
import Todo from './Todo';
const Todos=()=> {
    const [todos,setTodos]=useState([]);
    const [todo,setTodo]=useState("");
    const addTodo=()=>{
        setTodos([...to,todo]);
    }
  return (
    <div>
 <Todo todos={todos} addTodo={addTodo}/>
  <input type="text" onChange={(e)=>setTodo(e.target.value)}/>

    </div>
  )
}

export default Todos
