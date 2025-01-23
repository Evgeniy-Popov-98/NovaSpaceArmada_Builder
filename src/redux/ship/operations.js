import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:3000`,
});

export const fetchShips = createAsyncThunk(
  'ships/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/ships');
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massega);
    }
  }
);
