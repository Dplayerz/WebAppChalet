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
          <Link to="./Admin" className="Admin">
            TeamScore
          </Link>
          <Link to="./Login" className="Login">
          </Link>
        </li>
      </ul>
    </nav>
  );
}
