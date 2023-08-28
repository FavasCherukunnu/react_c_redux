import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPage } from '../components/addPage'
import { deleteTodo } from '../features/todo/todoSlice';

export function TodoListPage() {

    const dispatch = useDispatch();

    //this function calls when an dispatch function is called
    const todos = useSelector(
        (state)=>{
            return state.todos
        }
    )

    const handleDelete  = (id)=>{
        dispatch(deleteTodo(id))
    }

  return (
    <div>
        <AddPage/>
        {
            todos.map(
                (todo,index)=>{
                    return (
                        <div key={index} style={{padding:'10px',border:'1px solid',margin:'20px',borderRadius:'10px',display:'flex',justifyContent:'space-between'}}>
                            <span>{todo.description}</span>
                            <button onClick={()=>{handleDelete(todo.id)}}>delete</button>
                        </div>
                    );
                }
            )
        }
    </div>
  )
}
