import React from "react";
import "./Sign-up.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign up</h2>

        <form className="signup-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="signup-input"
          />

          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            placeholder="E-Mail"
            className="signup-input"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="signup-input"
          />

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="#">Log In</a>
        </p>
      </div>
    </div>
  );
}
