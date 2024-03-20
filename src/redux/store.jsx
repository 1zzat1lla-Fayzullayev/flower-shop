import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import flowers from "./reducers/flowerSlice";
import userProduct from "./reducers/userProduct";


export const store = configureStore({
  reducer: {
    flowers,
    categories: categorySlice,
    userProduct
  },
});
