import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("token") && localStorage.getItem("user"); // Vérifiez si un token existe

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
