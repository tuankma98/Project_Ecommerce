import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import createBlogReducer from './userSlice';

const rootReducer = {
  user: userReducer,
  createBlog: createBlogReducer,
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
