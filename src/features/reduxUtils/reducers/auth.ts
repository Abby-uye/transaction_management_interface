import { createSlice } from "@reduxjs/toolkit";
import { login } from "../slices/auth";
const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
  token: '',
  loading: false
}

export const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    CREATE_ACCOUNT: (state, action) => {
      state.token = action.payload;
    },
    SIGN_IN: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', '3232')
      localStorage.setItem('user', '3232')
    },

  },

  extraReducers: (builder) => {
    // pending state
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    // fullfilled state
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
    });

    // rejected state
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });

  },
});


export const { CREATE_ACCOUNT, SIGN_IN } = authSlice.actions;


export default authSlice;