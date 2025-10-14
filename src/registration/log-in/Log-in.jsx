import React, { useState } from "react";
import "./Log-in.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [showNotification, setShowNotification] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Login data", values);
      setShowNotification(true);
      resetForm();
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    },
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Log In</h2>

        <form className="login-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-Mail"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      {showNotification && (
        <div className="login-notification">✅ Login successful!</div>
      )}
    </div>
  );
}
