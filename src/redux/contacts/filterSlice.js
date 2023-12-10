import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filtered(state, action) {
      return action.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;

export default filterSlice.reducer;
