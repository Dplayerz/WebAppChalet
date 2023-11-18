import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        PEPPER GAMES{" "}
      </Link>
      <ul>
        <li>
<<<<<<< HEAD
          <Link to="./Admin" className="Admin">
            TeamScore
          </Link>
          <Link to="./Login" className="Login">
=======
          <a href="./Admin" className="Admin">
            TeamScore
          </a>
          <a href="./Login" className="Login">
>>>>>>> 448d2729b36397671d640b2fc920f69d8ed46334
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
