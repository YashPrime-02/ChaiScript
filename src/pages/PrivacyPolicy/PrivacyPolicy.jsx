import React from "react";
import "../../styles/privacy.css";
export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-last-updated">Last Updated: June 2026</p>

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            <strong>ChaiScript</strong> is a free, non-commercial, educational
            project created as a tribute to
            <strong> Hitesh Choudhary </strong> and his{" "}
            <strong>Chai Aur Code</strong> series.
          </p>
          <p>
            This website does not collect any personal data, run advertisements,
            or generate any monetary revenue. It exists purely for learning and
            sharing knowledge.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Credits &amp; Inspiration</h2>
          <p>
            ChaiScript is heavily inspired by the teaching style and content of{" "}
            <strong>Hitesh Choudhary</strong>.
          </p>
          <p>
            Special thanks to Hitesh Sir for making JavaScript, React, and
            modern web development approachable, practical, and enjoyable
            through his <strong>Chai Aur Code</strong> series.
          </p>

          <div className="credit-links">
            <a
              href="https://www.youtube.com/@HiteshChoudharydotcom"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 YouTube — Chai Aur Code
            </a>
            <a
              href="https://www.linkedin.com/in/hiteshchoudhary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn — Hitesh Choudhary
            </a>
          </div>
        </section>

        <section className="privacy-section">
          <h2>3. Data Collection</h2>
          <p>
            We do not collect, store, or sell any personal information. The only
            analytics used is Vercel Analytics (anonymous usage data only).
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Cookies</h2>
          <p>
            This site may use minimal essential cookies only for basic
            functionality. No tracking or advertising cookies are used.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Open Source &amp; Non-Commercial</h2>
          <p>
            ChaiScript is a passion project and completely non-monetized. All
            content is shared for educational purposes only.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to
            reach out via GitHub.
          </p>
        </section>

        <footer className="privacy-footer">
          Made with ❤️ as a tribute to Hitesh Choudhary &amp; Chai Aur Code
        </footer>
      </div>
    </div>
  );
}
