import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkSatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { checkSatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
