import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-header">
            <img
              src="/Favicon.png"
              alt="ChaiScript Logo"
              className="footer__brand-logo"
            />

            <h3>ChaiScript</h3>
          </div>

          <p>
            Learn JavaScript from basics to advanced concepts with structured
            notes, practical examples, and revision-friendly content.
          </p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Explore</h4>

            <Link to="/">Home</Link>

            <Link to="/topics">Topics</Link>

            <Link to="/background-behind-site">Behind The Site</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

          <div>
            <h4>Learning</h4>

            <a
              href="https://developer.mozilla.org"
              target="_blank"
              rel="noreferrer"
            >
              MDN Docs
            </a>

            <a href="https://www.youtube.com/@chaiaurcode" target="_blank" rel="noreferrer">
              Chai Aur Code Youtube Channel
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} ChaiScript</p>

        <span>Built with React ⚛️</span>
      </div>
    </footer>
  );
}

export default Footer;
