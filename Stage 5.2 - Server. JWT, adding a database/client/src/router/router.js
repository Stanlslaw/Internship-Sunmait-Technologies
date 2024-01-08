import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";

import Loader from "../components/Loader/index.jsx";
import store from "../redux/store.js";

import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute.js";

const App = lazy(() => import("../App.js"));
const Login = lazy(() => import("../pages/Login/index.jsx"));
const Home = lazy(() => import("../pages/Home/index.jsx"));
const Register = lazy(()=>import("../pages/Register/index.jsx"))
export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Provider>
    ),
    errorElement: null,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);
