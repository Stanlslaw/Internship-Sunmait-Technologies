import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routerConfig } from "./router/router";

import "./index.scss";
import "./assets/styles/reset.scss";
import "./assets/fonts/fonts.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={routerConfig}></RouterProvider>
  // </React.StrictMode>
);
