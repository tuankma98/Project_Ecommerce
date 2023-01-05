import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData, postData } from '../api';
import { RootState } from './store';

// get user create
export const postCreateBlogData = createAsyncThunk(
  'user/postCreateBlogData',
  async (
    {
      formData,
      successCallback,
    }: {
      formData: any;
      successCallback?: () => void;
    },
    { rejectWithValue },
  ) => {
    const { token, ...rest } = formData;
    try {
      const response = await postData('blog', rest, null, {
        Authorization: token,
      });
      if (response) {
        successCallback?.();
        return response.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getAllDataCreateBlog = createAsyncThunk(
  'user/getAllDataCreateBlog',
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await getData('blog', formData, null);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const createBlogSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCreateBlogData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

const { actions, reducer } = createBlogSlice;
export default reducer;

export const createBlogData = (state: RootState) => state.user;

export const dataCreateBlogSelector = createSelector(
  [createBlogData],
  (state) => state.data,
);
