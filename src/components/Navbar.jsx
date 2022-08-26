import "../styles/Navbar.css";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar-container">
        <nav className="navbar">
          <div className="navbar-toggler">
            <img src={HamburgerIcon} alt="menu toggler for mobile" />
          </div>
          <img src={LogoIcon} alt="scoot logo" />
        </nav>
      </header>
      <div className="navbar-mobile-menu">
        <ul className="navbar-mobile-menu-list">
          <li className="navbar-mobile-menu-list-item">
            <Link to="/">About</Link>
          </li>
          <li className="navbar-mobile-menu-list-item">
            <Link to="/">Location</Link>
          </li>
          <li className="navbar-mobile-menu-list-item">
            <Link to="/">Careers</Link>
          </li>
        </ul>
        <button className="navbar-mobile-menu-action-button">
          Get Scootin
        </button>
      </div>
    </>
  );
};

export default Navbar;
