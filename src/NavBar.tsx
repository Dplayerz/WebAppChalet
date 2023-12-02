import "./styleLogo.css";
import { Link } from "react-router-dom";
import Logo from "./assets/PEPPERLogoReal.png";
import "./styles.css";
import DropDown from "./dropDown";
import { useState } from "react";

export default function Nav() {
  const [openProfile, setOpenprofile] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <button
        className="button-85"
        onClick={() => setOpenprofile((prev) => !prev)}
      >
        MENU
      </button>
      {openProfile && <DropDown />}
      <ul>
        <li>
          <Link to="./Hidden" className="HideX">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
