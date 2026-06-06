import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PageContainer from "../../layouts/PageContainer";
import "../../styles/behind-site.css";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundBehindSite() {
  useEffect(() => {
    gsap.from(".story-text", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".story-panel",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".w1", {
      x: 500,
      rotate: 40,
      scrollTrigger: {
        trigger: ".chaos-world",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".w2", {
      x: -500,
      rotate: -30,
      scrollTrigger: {
        trigger: ".chaos-world",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".w3", {
      y: -250,
      rotate: 20,
      scrollTrigger: {
        trigger: ".chaos-world",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".w4", {
      y: 250,
      rotate: -20,
      scrollTrigger: {
        trigger: ".chaos-world",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".w5", {
      scale: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".chaos-world",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.from(".birth-circle", {
      scale: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".birth",
        start: "top 70%",
      },
    });

    gsap.to(".build-track", {
      xPercent: -55,
      ease: "none",
      scrollTrigger: {
        trigger: ".build-process",
        start: "top top",
        end: "+=2500",
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <PageContainer>
      {/* HERO */}

      <section className="hero-story">
        <div className="hero-grid"></div>

        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="stars">
          {[...Array(40)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        <p className="hero-small">Behind ChaiScript</p>

        <h1>
          Every Developer
          <br />
          Collects Notes.
          <br />
          Few Ever
          <br />
          Revisit Them.
        </h1>

        <div className="scroll-down">Scroll To Continue ↓</div>
      </section>

      {/* STORY */}

      <section className="story-panel">
        <h2 className="story-text">I Started Learning JavaScript.</h2>
      </section>

      {/* CHAOS */}

      <section className="chaos-world">
        <span className="word w1">📚 Bookmarks</span>

        <span className="word w2">📷 Screenshots</span>

        <span className="word w3">📝 Notes</span>

        <span className="word w4">🎥 YouTube</span>

        <span className="word w5">⭐ GitHub Stars</span>
      </section>

      {/* STATEMENT */}

      <section className="statement">
        <div className="statement-glow"></div>

        <h2>Learning JavaScript</h2>

        <h2>Wasn't Hard.</h2>

        <h2 className="accent-text dramatic-line">Remembering It Was.</h2>
      </section>

      {/* BIRTH */}

      <section className="birth">
        <div className="birth-circle"></div>

        <div className="birth-circle birth-circle-2"></div>

        <h2>☕ ChaiScript</h2>

        <p>
          One Place.
          <br />
          Every Concept.
          <br />
          Always Available.
        </p>
      </section>

      {/* BUILD PROCESS */}

      <section className="build-process">
        <div className="build-track">
          <div className="build-card">
            <h3>Research</h3>
            <p>Watch videos and collect concepts.</p>
          </div>

          <div className="build-card">
            <h3>Organize</h3>
            <p>Convert chaos into structure.</p>
          </div>

          <div className="build-card">
            <h3>Write Notes</h3>
            <p>Short revision friendly explanations.</p>
          </div>

          <div className="build-card">
            <h3>Examples</h3>
            <p>Real code snippets.</p>
          </div>

          <div className="build-card">
            <h3>Interview Prep</h3>
            <p>Concepts developers actually need.</p>
          </div>

          <div className="build-card">
            <h3>Continuous Revision</h3>
            <p>Learn once. Revise forever.</p>
          </div>
        </div>
      </section>

      {/* TRIBUTE */}

      <p className="topics-hero__footer-text">
        A tribute to <strong>Hitesh Choudhary</strong> and his incredible{" "}
        <strong>Chai Aur Code</strong> series. His practical and engaging
        teaching style made JavaScript accessible and enjoyable for millions,
        including the creator of ChaiScript.
      </p>

      <div className="instructor-links">
        <a
          href="https://www.youtube.com/@HiteshChoudharydotcom"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube → Chai aur Code
        </a>
        <a
          href="https://www.linkedin.com/in/hiteshchoudhary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      {/* FINAL */}

      <section className="birth">
        <div className="birth-circle"></div>

        <h2>🚀 Ready To Explore?</h2>

        <p>
          Every note.
          <br />
          Every concept.
          <br />
          One place.
        </p>
      </section>
    </PageContainer>
  );
}
