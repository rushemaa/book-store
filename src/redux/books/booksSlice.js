import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookData: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const itemId = `item${state.bookData.length + 1}`;
      state.bookData[state.bookData.length] = {
        item_id: itemId,
        ...action.payload,
      };
    },
    remove: (state, action) => {
      state.bookData = state.bookData.filter(
        (element) => element.item_id !== action.payload,
      );
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
