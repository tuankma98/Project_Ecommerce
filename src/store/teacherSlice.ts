import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getData } from '../api';
import { RootState } from './store';

// get user create
// export const getInfoUser = createAsyncThunk(
//   'user/getInfo',
//   async (token: string, { rejectWithValue }) => {
//     try {
//       const response = await getData(
//         'user/me',
//         {},
//         {
//           Authorization: token,
//         },
//       );

//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   },
// );

// get all teacher
export const getAllTeacher = createAsyncThunk(
  'teacher/getAllTeacher',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await getData(
        'admin/teacher',
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

const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    allTeacher: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   .addCase(getInfoUser.fulfilled, (state, action) => {
      //     state.data = action.payload;
      //   })
      .addCase(getAllTeacher.fulfilled, (state, action) => {
        state.allTeacher = action.payload;
      });
  },
});

const { actions, reducer } = teacherSlice;
export default reducer;

export const teacherData = (state: RootState) => state.teacher;

export const dataAllTeacherCreateSelector = createSelector(
  [teacherData],
  (state) => state.allTeacher,
);
