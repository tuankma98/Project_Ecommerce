import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData, postData } from '../api';
import { RootState } from './store';
import { NavbarType } from '@/utils/types';

// get user create
export const getInfoUser = createAsyncThunk(
  'user/getInfo',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await getData(
        'user/me',
        {},
        {
          Authorization: `${token}`,
        },
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// get user login
export const loginUser = createAsyncThunk(
  'user/login',
  async (formData: string, { rejectWithValue }) => {
    try {
      const response = await postData(
        'auth/login',
        formData,
        {},
        {
          'Content-Type': 'application/json',
        },
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// create account user
export const createUser = createAsyncThunk(
  'user/create',
  async (formData: string, { rejectWithValue }) => {
    try {
      const response = await postData(
        'auth/signup',
        formData,
        {},
        {
          'Content-Type': 'application/json',
        },
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    token: '',
    dataUser: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.dataUser = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

const { actions, reducer } = userSlice;
export default reducer;

export const userData = (state: RootState) => state.user;

export const userDataSelector = createSelector(
  [userData],
  (state) => state.data,
);

export const tockenDataCreateSelector = createSelector(
  [userData],
  (state) => state.token,
);

export const dataUserCreateSelector = createSelector(
  [userData],
  (state) => state.dataUser,
);
