import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import CommunityService from "../services/community.services";


const initialState = {};

export const sendPost = createAsyncThunk(
  "community/send-post",
  async ({ finalFormData }, thunkAPI) => {
    try {
      const data = await CommunityService.sendPost(finalFormData);
      return { community: data };
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

export const getPost = createAsyncThunk(
  "community/get-post",
  async ({ postId }, thunkAPI) => {
    try {
      const data = await CommunityService.getPost(postId);
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

export const getAllPost = createAsyncThunk(
  "community/get-all-post",
  async thunkAPI => {
    try {
      const data = await CommunityService.getAllPost();
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

export const uploadPostMedia = createAsyncThunk(
  "community/upload-post",
  async ({ formData }, thunkAPI) => {
    try {
      const data = await CommunityService.uploadPostMedia(formData);
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

export const savePostComment = createAsyncThunk(
  "community/save-post-comment",
  async ({ formData }, thunkAPI) => {
    try {
      const data = await CommunityService.savePostComment(formData);
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

export const postLike = createAsyncThunk(
  "community/save-post-likes",
  async ({ formData }, thunkAPI) => {
    try {
      const data = await CommunityService.postLike(formData);
      return data.data;
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

const communitySlice = createSlice({
  name: "community",
  initialState,
  extraReducers: {
    [getAllPost.fulfilled]: (state, action) => {
      state.communityData = action.payload.post;
      state.communityPageCount = action.payload.total_pages;
    },
    [getAllPost.rejected]: (state, action) => {
      state.communityData = null;
    },
    [savePostComment.fulfilled]: (state, action) => {
      const post = state.communityData.find(
        community => community.id === action.payload.post_id
      );
      if (post) {
        state.communityData = state.communityData.map(x => {
          if (x.id === action.payload.post_id) {
            x.comments.push(action.payload);
          }
          return x;
        });
      } else {
        return { ...state };
      }
    },
    [savePostComment.rejected]: (state, action) => {
      state.communityData = [...state.communityData];
    },

    [postLike.fulfilled]: (state, action) => {
      const post = state.communityData.find(
        community => community.id === action.payload.id
      );
      if (post) {
        state.communityData = state.communityData.map(x => {
          if (x.id === action.payload.id) {
            x.likes = action.payload.likes;
          }
          return x;
        });
      } else {
        return { ...state };
      }
    },
    [postLike.rejected]: (state, action) => {
      state.communityData = [...state.communityData];
    }
  }
});

const { reducer } = communitySlice;
export default reducer;
