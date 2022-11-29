import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api";
import { RootState } from "./store";

// get user login
export const getUserLogin = createAsyncThunk("user/getAll", async () => {
  try {
    const response = await getData(
      "posts",
      {},
      {
        "content-type": "application/json",
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLogin.fulfilled, (state, action) => {
      state.data = action.payload;
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
