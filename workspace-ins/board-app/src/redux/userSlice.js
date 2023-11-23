import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: function(state, action){
      state.user = action.payload.user
    }
  }
});

export default userSlice;
export const { setUser } = userSlice.actions;