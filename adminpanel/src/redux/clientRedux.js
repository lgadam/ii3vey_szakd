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
    deleteClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteClientSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
      state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getClientStart,
  getClientSuccess,
  getClientFailure,
  deleteClientStart,
  deleteClientSuccess,
  deleteClientFailure,
} = clientSlice.actions;

export default clientSlice.reducer;