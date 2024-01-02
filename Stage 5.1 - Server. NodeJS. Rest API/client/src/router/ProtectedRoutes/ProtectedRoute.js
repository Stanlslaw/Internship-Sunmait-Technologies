import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from "../../redux/slices/auth.slice.js";

const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
  const user = useSelector(selectUser);
  if (user) {
    return children;
  } else {
    return <Navigate to={redirectTo} />;
  }
};

export default ProtectedRoute;
