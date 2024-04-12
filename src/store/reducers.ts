// rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import someReducer from "./someReducers";

const rootReducer = combineReducers({
  some: someReducer,
  // Add other reducers here if you have them
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
