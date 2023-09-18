import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../context/MenuContext";

export const LogOut = () => {
  const { isLogged, setIsLogged } = useMenu();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    setIsLogged(localStorage.length);
    navigate("/login");
  };

  useEffect(() => {}, [isLogged]);

  return (
    <>
      <button className="nav-link" onClick={handleLogOut}>
        LogOut
      </button>
    </>
  );
};
