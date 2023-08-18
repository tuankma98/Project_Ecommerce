import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { postData } from '../api';
import { RootState } from './store';

// get user login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData: string, { rejectWithValue }) => {
    try {
      const response = await postData('auth/login', formData, null, {
        'Content-Type': 'application/json',
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// signup account user
export const createUser = createAsyncThunk(
  'auth/signup',
  async (formData: string, { rejectWithValue }) => {
    try {
      const response = await postData('auth/signup', formData, null, {
        'Content-Type': 'application/json',
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    token: '',
    create: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.token = action.payload?.token;
        state.create = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload?.token;
      });
  },
});

const { actions, reducer } = authSlice;
export default reducer;

export const authData = (state: RootState) => state.auth;

export const tokenDataCreateSelector = createSelector(
  [authData],
  (state) => state.token,
);

export const dataUserCreateSelector = createSelector(
  [authData],
  (state) => state.create,
);
