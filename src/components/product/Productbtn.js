import { createSlice } from "@reduxjs/toolkit";


export const aolie = createSlice({
    name:"Aolie",
    initialState:{
        number:1
    },
    reducers:{
        increment:(state,action) =>{
            state.number = state.number + 1
        },
        decrement:(state,action) =>{
            state.number = state.number - 1
        },
    }
})

export const {increment,decrement} = aolie.actions
export default aolie.reducer