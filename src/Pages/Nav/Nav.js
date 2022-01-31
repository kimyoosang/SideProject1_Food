import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={toggle ? "navbar target change" : "navbar target"}>
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
      <div
        className={toggle ? "menu target change" : "menu target"}
        onClick={() => setToggle(!toggle)}
      ></div>
    </>
  );
}

export default Nav;
