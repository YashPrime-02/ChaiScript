import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">

        <div className="footer__brand">
          <h3>☕ ChaiScript</h3>

          <p>
            Learn JavaScript from basics to advanced concepts
            with structured notes, practical examples, and
            revision-friendly content.
          </p>
        </div>

        <div className="footer__links">

          <div>
            <h4>Explore</h4>

            <Link to="/">Home</Link>

            <Link to="/topics">
              Topics
            </Link>

            <Link to="/background-behind-site">
              Behind The Site
            </Link>
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

            <a
              href="https://javascript.info"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript.info
            </a>
          </div>

        </div>

      </div>

      <div className="footer__bottom">

        <p>
          © {new Date().getFullYear()} ChaiScript
        </p>

        <span>
          Built with React ⚛️
        </span>

      </div>

    </footer>
  );
}

export default Footer;