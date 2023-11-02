import React from 'react'
import { ACTION } from './App'

function Todo({todo, dispatch}) {
  return (
    <div className='flex'>
        <p className={todo.completed ? 'line-through' : ""}>{todo.name}</p>
        <div>
            <button className={todo.completed ? "complete" : "incomplete"}
            onClick={()=>dispatch({type: ACTION.TOGGLE, id: todo.id})}>{todo.completed ? "Undo" : "Complete"}</button>
            <button className='red'
            onClick={()=>dispatch({type: ACTION.DELET, id: todo.id})}>Delete</button>
        </div>
    </div>
  )
}

export default Todo