import React from "react";
import "./styles.css";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        PEPPER GAMES{" "}
      </a>
      <ul>
        <li>
          <a href="./Admin" className="Admin">
            Admin
          </a>
          <a href="./Login" className="Login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
