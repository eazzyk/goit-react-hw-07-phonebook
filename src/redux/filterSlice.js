import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;
