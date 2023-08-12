import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData, postData } from '../api';
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

const courseSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    allCourse: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDataCourse.fulfilled, (state, action) => {
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
