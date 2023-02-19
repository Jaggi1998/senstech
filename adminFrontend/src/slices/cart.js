import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import CartService from "../services/cart.services";

const initialState = {};

export const addToCart = createAsyncThunk(
  "cart/add-to-cart",
  async ({ productData }, thunkAPI) => {
    try {
      const data = await CartService.addToCart(productData);
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

export const getCart = createAsyncThunk(
  "cart/get-cart",
  async ({ userId }, thunkAPI) => {
    try {
      const data = await CartService.getCart(userId);
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

export const deleteCart = createAsyncThunk(
  "cart/delete-cart",
  async ({ userId }, thunkAPI) => {
    try {
      const data = await CartService.deleteCart(userId);
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload.data;
    },
    [addToCart.rejected]: (state, action) => {
      state.cart = null;
    },
    [getCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload.data;
    },
    [getCart.rejected]: (state, action) => {
      state.cart = null;
    }
  }
});

const { reducer } = cartSlice;
export default reducer;
