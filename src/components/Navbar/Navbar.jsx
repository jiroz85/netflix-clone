import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">NETFLIX</div>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-signin">
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
