import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/users.slice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
