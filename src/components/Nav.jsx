import { Link, NavLink } from "react-router-dom";
import "./Nav.css"; // Import your CSS file

export default function Nav() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="sr-only">Heart Disease Predictor</span>
      </Link>
      <nav className="nav">
        <div className="menu-toggle">
          <button className="toggle-button" aria-label="Toggle menu">
            <MenuIcon className="icon" />
          </button>
          <div className="menu-dropdown">
            <div className="menu-links">
              <NavLink to="/" className="menu-link">
                Home
              </NavLink>
              <NavLink to="/form" className="menu-link">
                Predict
              </NavLink>
             <Link
            to="https://github.com/ragav2005/Heart-disease-predictor"
            className="menu-link"
          >
            GitHub
          </Link>
            </div>
          </div>
        </div>
        <div className="desktop-menu">
          <NavLink to="/" className="menu-link">
            Home
          </NavLink>
          <NavLink to="/form" className="menu-link">
            Predict
          </NavLink>
          <Link
            to="https://github.com/ragav2005/Heart-disease-predictor"
            className="menu-link"
          >
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}
