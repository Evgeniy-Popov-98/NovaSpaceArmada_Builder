import { createSlice } from '@reduxjs/toolkit';
import { fetchShips } from './operations';

const shipSlice = createSlice({
  name: 'ships',
  initialState: {
    item: [],
    isLoader: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShips.pending)
      .addCase(fetchShips.fulfilled, (state, action) => {
        state.isLoader = false;
        state.null = null;
        state.item = action.payload;
      })
      .addCase(fetchShips.rejected);
  },
});

export const shipReducer = shipSlice.reducer;
