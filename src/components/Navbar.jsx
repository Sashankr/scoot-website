import "../styles/Navbar.css";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-toggler">
          <img src={HamburgerIcon} alt="menu toggler for mobile" />
        </div>
        <img src={LogoIcon} alt="scoot logo" />
      </nav>
    </header>
  );
};

export default Navbar;
