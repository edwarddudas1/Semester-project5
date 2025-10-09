import React from "react";
import "./Sign-up.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>

        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="signup-input"
            onChange={formik.handleChange}
            value={formik.values.username}
          />

          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-Mail"
            className="signup-input"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="signup-input"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}
