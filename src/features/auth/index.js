import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coreUser: {},
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {   
    coreUserDetails: (state, { payload }) => {
      state.coreUser = payload;
    },

   
  },
  extraReducers: {},
});

export const {coreUserDetails} = AuthSlice.actions;

export default AuthSlice.reducer;
