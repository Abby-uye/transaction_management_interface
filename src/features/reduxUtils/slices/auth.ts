import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"
import { CREATE_ACCOUNT } from "../reducers/auth";
import { SIGN_IN } from "../reducers/auth";

export const login = createAsyncThunk<any, any>(
  "/login",
  async (_params, thunkAPI) => {
    try {
      thunkAPI.dispatch(SIGN_IN(''))


    } catch (error: any) {

      // handle error gracefully
      throw error
    }
  }
);

export const signup = createAsyncThunk<any, any>(
  "/sign-up",
  async (_params, thunkAPI) => {
    try {

      thunkAPI.dispatch(CREATE_ACCOUNT('the sign in payload'))

    } catch (error: any) {

      // handle error gracefully
      throw error
    }
  }
);