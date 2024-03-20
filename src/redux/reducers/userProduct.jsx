  import { createSlice } from "@reduxjs/toolkit";
  import { useDispatch } from "react-redux";

  const userProduct = createSlice({
    name: "userProduct",
    initialState: { myArray: [], priceOfAllProducts: 0, count: 0 },
    reducers: {
      setUserArray: (state, action) => {
        if (!state.myArray.find((product) => product._id == action.payload._id)) {
          // console.log('if');
          state.myArray.push(action.payload);
          state.priceOfAllProducts += action.payload.price;
          // state.count++
        } else {
          const selectedProduct = (product) => product._id == action.payload._id;
          let myIndex = state.myArray.findIndex(selectedProduct);
          state.myArray[myIndex].count++;
          state.priceOfAllProducts += action.payload.price;
          // state.count++
        }
      },
      delUserArray: (state, action) => {
        state.myArray.splice(action.payload.i, 1);
        if (state.myArray.length == 0) {
          state.priceOfAllProducts = 0;
          // state.count = 0
        } else {
          let num = 0;
          // state.count = 0
          state.myArray.map((product) => {
            if (product.count > 1) {
              num += product.price * product.count;
              // state.count++
            } else {
              num += product.price;
              // state.count += product.count
            }
          });
          state.priceOfAllProducts = num;
        }
      },
      minusUserArray: (state, action) => {
        const selectedProduct = (product) => product._id == action.payload._id;
        let myIndex = state.myArray.findIndex(selectedProduct);
        state.myArray[myIndex].count--;
        state.priceOfAllProducts -= action.payload.price;
        if (action.payload.count == 0) {
          delUserArray({ userProduct: action.payload, i: myIndex });
        }
      },
      plusCount: (state, action) => {
        state.count++;
      },
      minusCount: (state, action) => {
        state.count--;
      },
      setCount: (state, action) => {
        state.count -= action.payload;
      },
    },
  });

  export const {
    setUserArray,
    delUserArray,
    minusUserArray,
    plusCount,
    minusCount,
    setCount,
  } = userProduct.actions;

  export default userProduct.reducer;
