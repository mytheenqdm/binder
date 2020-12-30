/*
    reference : https://redux-toolkit.js.org/tutorials/intermediate-tutorial#exporting-the-slice-functions
*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos.push({ id, text, completed: false });
    },
  },
  extraReducers: {},
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
