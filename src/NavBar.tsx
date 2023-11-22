import "./styleLogo.css";
import { Link } from "react-router-dom";
import Logo from "./assets/PEPPERLogoReal.png";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to="./Admin" className="Admin">
            TeamScore
          </Link>

          
          <Link to="./Login">Défis</Link>
        </li>
      </ul>
    </nav>
  );
}
