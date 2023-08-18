import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData } from '../api';
import { RootState } from './store';

export const getAllDataCourse = createAsyncThunk(
  'course/getAllDataCourse',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getData('admin/course', {});
      return response.data.course;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getDataCourse = createAsyncThunk(
  'course/getDataCourse',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await getData(`api/courses/${slug}`);
      return response.data.course;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const courseSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    allCourse: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataCourse.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getAllDataCourse.fulfilled, (state, action) => {
        state.allCourse = action.payload;
      });
  },
});

const { actions, reducer } = courseSlice;
export default reducer;

export const createBlogData = (state: RootState) => state.course;

export const allDataCourseSelector = createSelector(
  [createBlogData],
  (state) => state.allCourse,
);

export const dataCourseSelector = createSelector(
  [createBlogData],
  (state) => state.data,
);
