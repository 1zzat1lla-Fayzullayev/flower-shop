import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "products",
  initialState: { array: [], selectedProduct: {} },
  reducers: {
    setProducts: (state, action) => {
      state.array = action.payload;
    },
    deleteProduct: (state, action) => {
      let index = action.payload;
      state.array.splice(index, 1);
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    sortProductsToCheap: (state, action) => {
      state.array.sort((a, b) => {
        return a.price - b.price;
      })
    },
    sortProductsToExpensive: (state, action) => {
      state.array.sort((a, b) => {
        return b.price - a.price;
      })
    },

  },
});

export const { setProducts, deleteProduct, setSelectedProduct, sortProductsToCheap, sortProductsToExpensive, searchProducts } =
  productSlice.actions;

export default productSlice.reducer;
