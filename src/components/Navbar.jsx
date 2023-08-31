import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink className="navbar-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/create-note">
          Create
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
