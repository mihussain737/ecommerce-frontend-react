import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")).filter(Boolean)
  : [];


const intialState ={
  carts: {cart:cartItems },
};

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    errors: errorReducer,
    carts: cartReducer
  },
  preloadedState:intialState,
});

export default store;