import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import userReducer from "./slices/user";
import communityReducer from "./slices/community";
import messageReducer from "./slices/message";
import productsReducer from "./slices/products";
import cartReducer from "./slices/cart";

const reducer = {
  auth: authReducer,
  user: userReducer,
  productList: productsReducer
};

const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
