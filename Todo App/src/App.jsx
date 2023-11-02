import { useState, useReducer } from 'react'
import './App.css'
import Todo from './Todo'

export const ACTION = {
  ADD: "add",
  TOGGLE: "toggle",
  DELET: "delete"
}

function reducer(todos, action){
    switch (action.type) {
      case ACTION.ADD:
        return[
          ...todos,
          action.name && {
            id: Date.now(),
            name: action.name,
            completed: false
          } 
        ];

      case ACTION.TOGGLE:
        return todos.map((todo)=>{
          if(todo.id === action.id){
            return{...todo, completed: !todo.completed}
          } else {
            return todo
          }
        })

        case ACTION.DELET:
        return todos.filter((todo)=> todo.id !== action.id)
        
    
      default:
        
    }
}





function App() {
  const [name, setname] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])
  console.log(todos)
  function handleSubmit(e){
    e.preventDefault();
    if(name===""){return alert("empty todo")}
    dispatch({type: ACTION.ADD, name: name})
    setname("")
  }
  return (
    <>
      <div className='header'>
      <h1>Todo Application With useReducer</h1>  
      </div>
      <div className='todo-app'>
        <form
        onSubmit={handleSubmit}
        >
        <input 
        placeholder='Enter Your Todo Msg and Hit Enter'
        value={name}
        onChange={(e)=>setname(e.target.value)}
        />
        </form>
        
      </div>
      <div className='todo-list'>
        {todos.map((todo)=>{
          return(
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          )
        })}
        
        </div>
     
      
    </>
  )
}

export default App

 
