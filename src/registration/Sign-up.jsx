import React from "react";
import "./Sign-up.css";
import { useFormik } from "formik";

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
        <h2 className="signup-title">Sign up</h2>

        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="signup-input"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            placeholder="E-Mail"
            className="signup-input"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="signup-input"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.firstName}
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
