import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = learnSlice.actions;

export default learnSlice.reducer;
