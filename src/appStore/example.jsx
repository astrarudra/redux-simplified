import { createSlice } from "@reduxjs/toolkit"

// Initial State
var example = {
    objList: [
        {id:1, data: "example1"},
        {id:2, data: "example2"},
    ],
    justList: ['abc', 123],
    email: "rudraroy1507@gmail.com"
}

// Store Actions - These should be pure functions.
const slice = createSlice({
    name: "example",
    initialState: example,
    reducers: {
        // Handles Immutability
        changeEmail: (example, action) => {
            var { email } = action.payload
            example.email = email
        },
        changeData: (example, action) => {
            var { id, data } = action.payload
            example.objList.forEach(o => {
                if(o.id === id) o.data = data
            })
        },
        addList: (example, action) => {
            var { justList } = example
            justList.push("Dummy")
        },
    }
})

// Direct Export - May not be required.
export const { changeEmail , changeData , addList } = slice.actions
export default slice