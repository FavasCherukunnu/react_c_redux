import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:0,
            description:'this is first todo'
        }
    ]
}


const todoSlice = createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            addTodo:(state,action)=>{
                const todo = state.todos;
                var lastItem = todo[todo.length-1]
                if(!lastItem){
                    lastItem={id:-1}
                }
                // console.log(todo[todo.length-1].description);
                todo.push(
                    {
                        id:lastItem.id+1,
                        description:action.payload
                    }
                )
            },
            deleteTodo:(state,action)=>{
                state.todos = state.todos.filter(
                    (item)=>{
                        return item.id!==action.payload
                    }
                )
            }
        }
    }
)

export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer