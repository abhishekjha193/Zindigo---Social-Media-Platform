import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.scss";
import axios from "axios";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");

  function handlesubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/api/auth/login",
        { email, password }, 
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <main className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handlesubmit}>
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onInput={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
