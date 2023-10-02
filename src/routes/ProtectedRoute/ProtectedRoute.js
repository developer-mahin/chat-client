import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
