import { configureStore } from "@reduxjs/toolkit";

import auth from "../redux/slices/auth.slice";
const store = configureStore({
  reducer: {
    auth: auth,
  },
});

export default store;
