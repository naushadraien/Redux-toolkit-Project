import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const todosSLice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: uid(), //for generating unique user id
        name: action.payload.task,
        userEmail: action.payload.userEmail, // add the userEmail field
      };
      state.push(newTask);
    //   console.log(state);
    //   console.log(action);
      // localStorage.setItem(newTask.id, JSON.stringify(newTask));
    },
    removeTodo: (state, action) => {
      return state.filter((data) => data.id !== action.payload.id);
    },
    removeAllTodos: (state, action) => {
      const currentUserEmail = action.payload;
    //   console.log(action.payload);
      return state.filter((todo) => todo.userEmail !== currentUserEmail);
    },
  },
});

export default todosSLice.reducer;
export const { addTodo, removeTodo, addUser, removeAllTodos } =
  todosSLice.actions;
