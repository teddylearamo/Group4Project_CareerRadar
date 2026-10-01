import { Link, NavLink } from "react-router-dom";

// NavLink automatically adds an "active" class on the current route,
// which we style in global.css.
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-dot" aria-hidden="true" />
          Career<span className="brand-accent">Radar</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}