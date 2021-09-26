import { configureStore, createSlice } from "@reduxjs/toolkit";

const myReducers=createSlice({
    name: "rootnetReducer",
    initialState:{
        user: null
    },
    reducers:{
        setUser(state, payload){
            state.user=payload.payload
        }
    }
})

const store=configureStore({
    reducer: {
        rootnetReducer: myReducers.reducer
    }
})

export default store;
export const rootnetActions=myReducers.actions;