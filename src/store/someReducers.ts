import { createSlice } from "@reduxjs/toolkit";


interface SomeState { 
  selectedImage: string | null;
}


const initialState: SomeState = {
  selectedImage: null,
};

const someSlice = createSlice({
    name: "some",
    initialState,
    reducers: {
      updateImage(state, action) {
        state.selectedImage = action.payload;
      },
    },
});

export const { updateImage } = someSlice.actions;
export default someSlice.reducer;
