import { configureStore } from '@reduxjs/toolkit';
import { shipReducer } from './ship/slice';

export const store = configureStore({
  reducer: { ships: shipReducer },
});
