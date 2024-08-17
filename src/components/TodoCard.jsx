import React from 'react'
// Receive the children using props arg from above components
import '../index.css'
export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <li className='todoItem'>
        {children}
    <div className='actionsContainer'>
        <button onClick={()=>
            handleEditTodo(index)
        }>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
            handleDeleteTodo(index)
        }}>
            <i className="fa-regular fa-trash-can"></i>
        </button>
    </div>
    </li>   
  )
}
