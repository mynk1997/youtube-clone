import { createSlice } from "@reduxjs/toolkit";

const searchSclice= createSlice({
    name: 'search',
    initialState:{},
    reducers:{
        cacheResults:(state,actions)=>{
            state=Object.assign(state,actions.payload);
        }
    }   
});

export const {cacheResults} =searchSclice.actions;
export default searchSclice.reducer; 
