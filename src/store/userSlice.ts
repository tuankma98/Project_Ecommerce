import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData, postData } from '../api';
import { RootState } from './store';

// get user login
export const getUserCreate = createAsyncThunk(
  'user/getAll',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await getData(
        'user/me',
        {},
        {
          'content-type': 'application/json',
        },
      );
      return response.data;
    } catch (err) {
      return err;
    }
  },
);

// create account user

// type formDataType = {
//   username: string;
//   email: string;
//   password: string;
// };
export const createUser = createAsyncThunk(
  'user/create',
  async (formData: string, { rejectWithValue }) => {
    console.log(formData);
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
    data: {},
    token: null,
    dataUser: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCreate.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.dataUser = action.payload;
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
