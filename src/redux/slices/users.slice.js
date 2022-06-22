import { createSlice } from "@reduxjs/toolkit";

const defaultUser = [
  {
    name: "Arpan Bari",
    email: "arpan@gmail.com",
    createdAt: 1655737941728,
    role: "admin",
  },
  {
    name: "Jonathan D'cruz",
    email: "jonny@gmail.com",
    createdAt: 1655565234586,
    role: "sales",
  },
  {
    name: "HelloAr User",
    email: "helloar@gmail.com",
    createdAt: 1655910877605,
    role: "owner",
  },
];

const initialUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : defaultUser;

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [...initialUsers],
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
