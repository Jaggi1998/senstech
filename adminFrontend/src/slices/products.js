import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import ProductService from "../services/products.services";

const initialState = {};

export const getAllProducts = createAsyncThunk(
  "products/get-all-products",
  async thunkAPI => {
    try {
      const data = await ProductService.getAllProducts();
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

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.productPageCount = action.payload.total_pages;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.products = null;
    }
  }
});

const { reducer } = productSlice;
export default reducer;
