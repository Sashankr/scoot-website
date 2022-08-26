import "../styles/Navbar.css";
import LogoIcon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={LogoIcon} alt="scoot logo" />
      </nav>
    </header>
  );
};

export default Navbar;
