import React from "react";
import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("token") && localStorage.getItem("user"); // Vérifiez si un token existe

  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default RedirectIfAuthenticated;
