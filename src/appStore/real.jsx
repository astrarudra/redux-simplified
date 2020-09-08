import { createSlice } from "@reduxjs/toolkit"

var realObj = {
    objList: [
        {id:1, data: "example1"},
        {id:2, data: "example2"},
    ],
    justList: ['abc', 123],
    email: "astrarudra8@gmail.com"
}

const slice = createSlice({
    name: "realObj",
    initialState: realObj,
    reducers: {
        changeEmail: (realObj, action) => {
            var { email } = action.payload
            realObj.email = email
            return realObj
        },
        changeData: (realObj, action) => {
            var { id, data } = action.payload
            realObj.objList.forEach(o => {
                if(o.id === id) o.data = data
            })
            return realObj
        },
        addList: (realObj, action) => {
            var { justList } = realObj
            justList.push("Dummy")
            return realObj
        },
    }
})

export const { changeEmail , changeData , addList } = slice.actions
export default slice