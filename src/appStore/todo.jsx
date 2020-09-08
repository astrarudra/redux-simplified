import { createSlice } from "@reduxjs/toolkit"

const todo = []
var counter = 1

const slice = createSlice({
    name: "todo",
    initialState: todo,
    reducers: {
        addTodo: (todo, action) => {
            var { value } = action.payload // This is done to document what you should pass to the action
            todo.push({id: counter++, value})
            return todo
        },
        deleteTodo: (todo, action) => {
            console.log(action)
            var { id } = action.payload
            todo = todo.filter(o => o.id !== id)
            return todo
        }
    }
})

export const { addTodo , deleteTodo} = slice.actions
export default slice