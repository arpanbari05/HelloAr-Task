import { createSlice } from "@reduxjs/toolkit";

const localStorageUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [...localStorageUsers],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      const index = action.payload;
      state.users.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
