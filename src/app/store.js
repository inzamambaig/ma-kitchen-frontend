import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/chef/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
