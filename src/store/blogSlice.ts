import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData, postData } from '../api';
import { RootState } from './store';

// post blog
export const postCreateBlogData = createAsyncThunk(
  'blog/postCreateBlogData',
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
  'blog/getAllDataCreateBlog',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getData('blog', {});
      return response.data.blog;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const blogSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    allBlog: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCreateBlogData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getAllDataCreateBlog.fulfilled, (state, action) => {
        state.allBlog = action.payload;
      });
  },
});

const { actions, reducer } = blogSlice;
export default reducer;

export const createBlogData = (state: RootState) => state.blog;

export const dataCreateBlogSelector = createSelector(
  [createBlogData],
  (state) => state.data,
);

export const allDataCreateBlogSelector = createSelector(
  [createBlogData],
  (state) => state.allBlog,
);
