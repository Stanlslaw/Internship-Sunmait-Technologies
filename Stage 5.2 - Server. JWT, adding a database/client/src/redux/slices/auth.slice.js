import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const { login } = AuthSlice.actions;
export const selectUser = (state) => state.auth.token;
