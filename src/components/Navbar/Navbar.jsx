import "./Navbar.css";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">NETFLIX</div>
      </div>
      <div className="navbar-right">
        <button className="navbar-signin">Sign In</button>
      </div>
    </header>
  );
}

export default Navbar;
