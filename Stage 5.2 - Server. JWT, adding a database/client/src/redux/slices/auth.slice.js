import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const { login } = AuthSlice.actions;
export const selectUser = (state) => state.auth.isAuth;
