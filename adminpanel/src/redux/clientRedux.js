import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getClientSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getClientStart,
  getClientSuccess,
  getClientFailure,
} = clientSlice.actions;

export default clientSlice.reducer;