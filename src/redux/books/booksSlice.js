import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bzI92MEIsaVC0dF5ZuGQ/books';
export const fetchData = createAsyncThunk('Books/get', async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const removeBooks = createAsyncThunk('Books/remove', async (bookId) => {
  try {
    await axios.delete(`${url}/${bookId}`);
    return bookId;
  } catch (error) {
    return error.response.data;
  }
});

export const addBooks = createAsyncThunk('Books/post', async (newBook) => {
  try {
    await axios.post(url, newBook);
    return newBook;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  bookData: [],
  isSuccess: false,
  message: '',
  loading: false,
};

const newBooks = (payload) => {
  const keys = Object.keys(payload);
  const array = [];
  keys.forEach((key) => {
    array.push({
      item_id: key,
      ...payload[key][0],
    });
  });
  return array;
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookData = newBooks(action.payload);
        state.isSuccess = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        const itemId = `item${state.bookData.length + 1}`;
        state.bookData[state.bookData.length] = {
          item_id: itemId,
          ...action.payload,
        };
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        state.bookData = state.bookData.filter(
          (element) => element.item_id !== action.payload,
        );
      });
  },
});
export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
