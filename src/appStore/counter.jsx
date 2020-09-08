import { createSlice } from "@reduxjs/toolkit"
var counter = 1

const slice = createSlice({
    name: "counter",
    initialState: counter,
    reducers: {
        increase: (counter, action) => {
            return ++counter
        },
        decrease: (counter, action) => {
            return --counter
        }
    }
})

export const { increase , decrease} = slice.actions
export default slice