import React from "react";
import "../nav.scss";
import { useNavigate } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";

const Nav = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src="/logo.png" alt="Zindigo" />
        <span>Zindigo</span>
      </div>

      <div className="nav-actions">
        <button
          className="button primary-button"
          onClick={() => navigate("/create-post")}
        >
          New Post
        </button>

        <button className="button logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
