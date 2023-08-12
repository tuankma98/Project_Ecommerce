import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import userReducer from './userSlice';
import teacherReducer from './teacherSlice';
import blogReducer from './blogSlice';
import courseReducer from './courseSlice';

const rootReducer = {
  auth: authReducer,
  user: userReducer,
  teacher: teacherReducer,
  blog: blogReducer,
  course: courseReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
