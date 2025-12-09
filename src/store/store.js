import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    errors: errorReducer,
  },
});

export default store;