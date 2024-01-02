import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.username === "admin" &&
        action.payload.password === "1234"
      ) {
        state.user = action.payload;
      } else {
        state.user = null;
      }
    },
  },
});

export default AuthSlice.reducer;
export const { login } = AuthSlice.actions;
export const selectUser = (state) => state.auth.user;
