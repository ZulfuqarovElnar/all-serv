import { createSlice } from "@reduxjs/toolkit";


interface SomeState { 

}


const initialState: SomeState = {

};

const someSlice = createSlice({
    name: "some",
    initialState,
    reducers: {
    
    someAction() {

    },
  },
});

export const { someAction } = someSlice.actions;
export default someSlice.reducer;
