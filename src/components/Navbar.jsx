import { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import CloseIcon from "../assets/icons/close.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleTogglerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="navbar-container">
        <nav className="navbar">
          <div
            className={`navbar-toggler ${isSidebarOpen ? "close" : "open"}`}
            onClick={() => handleTogglerClick()}
          >
            <img
              src={isSidebarOpen ? CloseIcon : HamburgerIcon}
              alt={isSidebarOpen ? "close menu" : "open menu"}
            />
          </div>
          <img src={LogoIcon} alt="scoot logo" />
        </nav>
      </header>
      <div
        className={`navbar-mobile-menu ${isSidebarOpen ? "open" : "closed"}`}
      >
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
        <button
          onClick={() => handleTogglerClick()}
          className="navbar-mobile-menu-action-button"
        >
          Get Scootin
        </button>
      </div>
    </>
  );
};

export default Navbar;
