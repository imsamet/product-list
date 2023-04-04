import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  loading: false,
};

export const basketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basket = [...state.basket, { ...action.payload, count: 1 }];
    },
    removeBasket: (state, action) => {
      state.basket = state.basket.filter(i => i.id !== action?.payload?.id);
    },
    countUp: (state, action) => {
      state.basket = state.basket.map(i => ({ ...i, count: i.id === action?.payload ? i?.count + 1 : i?.count }));
    },
    countDown: (state, action) => {
      const item = state.basket.find(i => i?.id === action?.payload);
      state.basket =
        item.count === 1
          ? state.basket.filter(i => i.id !== action?.payload)
          : state.basket.map(i => ({ ...i, count: i.id === action?.payload ? i?.count - 1 : i?.count }));
    },
  },
});

const { actions, reducer } = basketReducer;
export const { addBasket, removeBasket, countUp, countDown } = actions;
export default reducer;
