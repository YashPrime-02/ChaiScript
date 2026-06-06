import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <Link
        to="/"
        className="navbar__logo"
      >
        ☕ ChaiScript
      </Link>

      <nav
        className={`navbar__nav ${
          menuOpen ? "navbar__nav--open" : ""
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/topics"
          onClick={() => setMenuOpen(false)}
        >
          Topics
        </NavLink>

        <NavLink
          to="/background-behind-site"
          onClick={() => setMenuOpen(false)}
        >
          Behind Site
        </NavLink>
      </nav>

      <div className="navbar__actions">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </header>
  );
}

export default Navbar;