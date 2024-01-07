import { configureStore } from "@reduxjs/toolkit";

import auth from "../redux/slices/auth.slice.js";

import { authApi } from "./slices/auth.query.js";
import { projectsApi } from "./slices/projects.query.js";
const store = configureStore({
  reducer: {
    auth: auth,
    [authApi.reducerPath]: authApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApi.middleware,
      projectsApi.middleware
    );
  },
});

export default store;
