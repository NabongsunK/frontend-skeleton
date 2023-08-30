import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'myCounter',
  initialState: {count: 1},
  reducers: {
    up: function(state, action){
      state.count += action.payload.step;
    },
    down(state, action){
      state.count -= action.payload.step;
    }
  }
});

export default counterSlice;
export const { up, down } = counterSlice.actions;