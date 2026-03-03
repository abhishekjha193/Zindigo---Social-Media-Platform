import  React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.scss";
import axios from "axios";

function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", {
        username,
        email,
        password,
      },{
        withCredentials:true
      });

      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <main className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
