import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Logout.css"

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      🚪 Logout
    </button>
  );
};

export default Logout;
