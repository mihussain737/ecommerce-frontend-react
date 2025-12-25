import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";

const user = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth")).filter(Boolean)
  : [];

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")).filter(Boolean)
  : [];


const intialState ={
  auth: {user:user},
  carts: {cart:cartItems },
};

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    errors: errorReducer,
    carts: cartReducer,
    auth:authReducer
  },
  preloadedState:intialState,
});

export default store; 