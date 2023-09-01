import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  message: "",
  error: "",
  token: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});
