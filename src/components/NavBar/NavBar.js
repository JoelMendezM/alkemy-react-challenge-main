import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "../LogOut/LogOut";
import { useMenu } from "../../context/MenuContext";

export const NavBar = () => {
  const { isLogged } = useMenu();

  useEffect(() => {}, [isLogged]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Alkemy Labs
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              {isLogged > 0 ? (
                <LogOut />
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
