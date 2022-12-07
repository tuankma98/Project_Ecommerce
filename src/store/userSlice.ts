import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData, postData } from '../api';
import { RootState } from './store';

// get user login
export const getUserLogin = createAsyncThunk('user/getAll', async () => {
  try {
    const response = await getData(
      'posts',
      {},
      {
        'content-type': 'application/json',
      },
    );
    return response.data;
  } catch (err) {
    return err;
  }
});

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

      console.log(response);
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
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserLogin.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
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

export const userDataCreateSelector = createSelector(
  [userData],
  (state) => state.user,
);
