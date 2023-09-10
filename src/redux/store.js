import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice/authSlice";
import userReducer from "./userSlice/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
});

export default store;
