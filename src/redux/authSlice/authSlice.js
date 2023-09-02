import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const singUpUser = createAsyncThunk(
  "authSlice/singUpUser",
  async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/sign_up",
        data
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const signInUser = createAsyncThunk(
  "authSlice/signInUser",
  async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/sign_in",
        data
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  isLoading: false,
  data: {},
  message: "",
  error: "",
  token: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    /**
     * signup credential
     */
    builder.addCase(singUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(singUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.token = payload.token;
      toast(state.message);
    });
    builder.addCase(singUpUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    /**
     * sign in credential
     */
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.token = payload.token;
      state.user = payload.user;
      toast(state.message);
      localStorage.setItem("access_token", state.token);
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    });
  },
});

export default authSlice.reducer;
