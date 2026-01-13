import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";
import { paymentMethodReducer } from "./reducers/paymentReducer";
import { AdminReducer } from "./reducers/AdminReducer";

const user = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const selectedUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
  ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
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
    auth:authReducer,
    payment: paymentMethodReducer,
    admin: AdminReducer,
  },
  preloadedState:intialState,
});

export default store; 