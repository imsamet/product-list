import { createSlice } from '@reduxjs/toolkit';
import getProducts from '../actions/Products/getProducts';

const initialState = {
  products: null,
  loading: false,
};

export const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectApp: (state, { payload }) => void (state.selectedApp = payload.key),
  },
  extraReducers: {
    [getProducts.pending]: state => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const { actions, reducer } = productsReducer;
export const { selectApp } = actions;
export default reducer;
