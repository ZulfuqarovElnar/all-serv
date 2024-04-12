import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SomeState {

}

const initialState: SomeState = {
 
};

const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    
    someAction(state, action: PayloadAction<SomePayloadType>) {
     
    },
  },
});

export const { someAction } = someSlice.actions;

export default someSlice.reducer;
