import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/login.scss";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const { user, loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username, password);

    console.log("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo.png" alt="logo" className="logo" />

        <h2>Welcome Back</h2>

        <form onSubmit={handlesubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          Don't have an account? <Link to="/register">Signup</Link>
        </p>
      </div>
    </div>
  );
};
