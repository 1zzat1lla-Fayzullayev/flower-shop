import { createSlice } from "@reduxjs/toolkit";
import flower from '../../assets/flowers/1.jpg'
const array = [
  {
    image: flower,
    title: 'Atir gul',
    id: 1,
  },
  {
    image: flower,
    title: 'Lola',
    id: 2,
  },
  {
    image: flower,
    title: 'Buket',
    id: 3,
  },
  {
    image: flower,
    title: 'Savat',
    id: 4,
  },
  {
    image: flower,
    title: 'Savat 2',
    id: 5,
  },
  {
    image: flower,
    title: 'Savat 3',
    id: 6,
  },
]
const categorySlice = createSlice({
  name: "categories",
  initialState: { array, selectedCategory: {} },
  reducers: {
    setCategories: (state, action) => {
      state.array = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
