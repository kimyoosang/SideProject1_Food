import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="section-4">
      <div className="section-4-text">
        <h2 className="section-4-heading">Sign Me Up</h2>
        <p className="section-4-paragraph">
          Be the first to know about new products
        </p>
      </div>
      <form className="signyo-form">
        <input
          type="email"
          className="signup-form-input"
          placeholder="Enter Your Email"
        />
        <button className="signup-form-btn" type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
      <p className="copyright">Code And Create &copy;All Right Reserved</p>
    </section>
  );
}

export default Footer;
