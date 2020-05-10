import React from "react";
import "./Title.css";
import { NavLink } from "react-router-dom";

function Title() {
  return (
    <div className="Title">
      <h1>Fun app</h1>
      <div>
        <NavLink className="navlink" activeClassName="nav-link-active"
        exact to="/">
          List
        </NavLink>
        <NavLink className="navlink" activeClassName="nav-link-active"
        exact to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Title;
