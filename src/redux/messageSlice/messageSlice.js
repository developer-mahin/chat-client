import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("access_token");
export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/message/send_message",
        { ...data, token }
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const getMessage = createAsyncThunk("message/getMessage", async (id) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/v1/message/get__message/${id}`,
      { token }
    );
    return res.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  isLoading: false,
  messageData: [],
  error: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(sendMessage.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    });
    /**
     *
     *
     */
    builder.addCase(getMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMessage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.messageData = payload.message;
    });
    builder.addCase(getMessage.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    });
  },
});

export default messageSlice.reducer;
