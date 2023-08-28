import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export function AddPage() {

    const [description,setDescription] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(description!==''){
            //changin the state and the selector function will call now
            dispatch(addTodo(description))
        }
        setDescription('')
    }

    const onChangeDes = (event)=>{
        setDescription(event.target.value);
    }

  return (
    <div style={{display:'flex',padding:'20px',paddingBottom:'30px'}}>
        <form onSubmit={handleSubmit}>
            <input title='Description' placeholder='Description' onChange={onChangeDes} value={description}></input>
            <input style={{marginLeft:'20px'}} type='submit' value={'Add'}></input>
        </form>
    </div>
  )
}
