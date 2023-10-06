import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import boardSlice from "./boardSlice";

const store = configureStore({
  reducer: {
    boardStore: boardSlice.reducer,
    userStore: userSlice.reducer
  }
});

export default store;