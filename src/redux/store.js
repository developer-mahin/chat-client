import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice/authSlice";
import userReducer from "./userSlice/userSlice";
import messageReducer from "./messageSlice/messageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    message: messageReducer,
  },
});

export default store;
