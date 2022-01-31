import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <a href="" className="navbar-link">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a href="" className="navbar-link">
          <i className="fas fa-utensils"></i>
          <span>Meals</span>
        </a>
        <a href="" className="navbar-link">
          <i className="fas fa-hamburger"></i>
          <span>Burger</span>
        </a>
        <a href="" className="navbar-link">
          <i className="fas fa-pizza-slice"></i>
          <span>Pizza</span>
        </a>
        <a href="" className="navbar-link">
          <i className="fas fa-blender-phone"></i>
          <span>Contact</span>
        </a>
      </nav>
      <div className="menu"></div>
    </>
  );
}

export default Nav;
