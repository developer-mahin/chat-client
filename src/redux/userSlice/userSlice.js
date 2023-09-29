import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk(
  "userData/getAllUser",
  async (token) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/all_user",
        { token }
      );

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
  message: "",
  error: "",
  token: "",
};

const token = localStorage.getItem("access_token");
if (token) {
  initialState.token = token;
}

const userSlice = createSlice({
  name: "userData",
  initialState,
  extraReducers: (builder) => {
    /**
     * get user data
     */
    builder.addCase(getAllUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload.users;
      state.message = payload.message;
      state.error = payload.error;
    });
    builder.addCase(getAllUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.data = [];
      state.message = payload.message;
      state.error = payload.error;
    });
  },
});

export default userSlice.reducer;
