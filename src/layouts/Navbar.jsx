import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <Link
        to="/"
        className="navbar__logo"
      >
        ☕ ChaiScript
      </Link>

      <nav className="navbar__nav">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/topics">
          Topics
        </NavLink>

        <NavLink to="/background-behind-site">
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
      </div>
    </header>
  );
}

export default Navbar;