import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: null,
    },
    reducers: {
      addUser:(state, action)=>{
        const id = uid(); // Generate a unique id
        state.user = { id, ...action.payload }; // Add the id to the user object
      },
      removeUser:(state, action)=>{
        state.user = null;
      },
    },
  });

  export default userSlice.reducer;
  export const {addUser, removeUser}= userSlice.actions;