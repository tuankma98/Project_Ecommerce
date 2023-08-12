import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData } from '../api';
import { RootState } from './store';

// get user create
export const getInfoUser = createAsyncThunk(
  'user/getInfo',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await getData(
        'user/me',
        {},
        {
          Authorization: token,
        },
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// get all user
export const getAllUser = createAsyncThunk(
  'user/getAllUser',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getData('user', {});

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// get all teacher
export const getAllTeacher = createAsyncThunk(
  'user/getAllTeacher',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getData('user', {});

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
    allUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.allUser = action.payload;
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

export const dataAllUserCreateSelector = createSelector(
  [userData],
  (state) => state.allUser,
);
