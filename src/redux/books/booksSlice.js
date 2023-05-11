import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookData: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.bookData[state.bookData.length] = action.payload;
    },
    remove: (state, action) => {
      state.bookData.filter((element) => element.id === action.payload);
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
