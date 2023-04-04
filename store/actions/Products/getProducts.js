import api from '../../../lib/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
const getProducts = createAsyncThunk('products', async (data, { rejectWithValue }) => {
  try {
    const response = await api.get('products');
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export default getProducts;
