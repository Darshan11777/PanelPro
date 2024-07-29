import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

export default function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    logout();

    toast.success("Logout successfully");
  }, [logout]);

  return <Navigate to="/login" />;
}
