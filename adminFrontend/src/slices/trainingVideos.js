import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainingVideoService from "../services/trainingVideos.services";
import { setMessage } from "./message";

const initialState = {};

export const getCategoryVideos = createAsyncThunk(
  "trainingVideos/get-category-Videos",
  async ({ category }, thunkAPI) => {
    try {
      const data = await trainingVideoService.getCategoryVideos(category);
      return data;
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

export const getAllVideos = createAsyncThunk(
  "trainingVideos/get-all-videos",
  async thunkAPI => {
    try {
      const data = await trainingVideoService.getAllVideos();
      return data;
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

const trainingVideosSlice = createSlice({
  name: "trainingVideos",
  initialState,
  extraReducers: {}
});

const { reducer } = trainingVideosSlice;
export default reducer;
