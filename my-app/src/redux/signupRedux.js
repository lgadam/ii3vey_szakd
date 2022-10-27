import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addSignupStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSignupSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    addSignupFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addSignupStart,
  addSignupSuccess,
  addSignupFailure,
} = signupSlice.actions;

export default signupSlice.reducer;