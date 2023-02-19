import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import UserService from "../services/user.service";

const initialState = {};

export const getUsers = createAsyncThunk("user/getUsers", async thunkAPI => {
  try {
    const data = await UserService.getUsers();
    return { user: data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ userId }, thunkAPI) => {
    try {
      const data = await UserService.deleteUser(userId);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.userList = action.payload.user;
    },
    [getUsers.rejected]: (state, action) => {
      state.userList = [];
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.userList = action.payload.user;
    },
    [deleteUser.rejected]: (state, action) => {
      state.userList = state.userList;
    }
  }
});

const { reducer } = userSlice;
export default reducer;
