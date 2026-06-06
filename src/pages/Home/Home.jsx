import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PageContainer from "../../layouts/PageContainer";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";

import { useTopics } from "../../api/queries";
import CountUpModule from "react-countup";

import "../../styles/Home.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const CountUp = CountUpModule.default;
  const trackRef = useRef(null);
  const { data, isLoading, error } = useTopics();

  useEffect(() => {
    // Clear any existing triggers first (very important)
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const ctx = gsap.context(() => {
      // HERO ANIMATIONS
      gsap
        .timeline()
        .from(".topics-badge", { y: 40, opacity: 0, duration: 0.8 })
        .from(".topics-title", { y: 120, opacity: 0, duration: 1.2 }, "-=0.4")
        .from(
          ".topics-description",
          { y: 80, opacity: 0, duration: 1 },
          "-=0.8",
        )
        .from(".hero-actions", { y: 60, opacity: 0, duration: 1 }, "-=0.6");

      // Hero Parallax
      gsap.to(".topics-title", {
        yPercent: 35,
        scrollTrigger: {
          trigger: ".topics-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".topics-description", {
        yPercent: 55,
        scrollTrigger: {
          trigger: ".topics-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // CONCEPT WALL - Horizontal Scroll
      if (trackRef.current) {
        const track = trackRef.current;
        const distance = track.scrollWidth - window.innerWidth + 150;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: ".concept-wall",
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // STATS
      gsap.from(".wall-item", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stats-wall", start: "top 80%" },
      });

      // LEARNING STORY
      gsap.set(".learning-step", { opacity: 0, scale: 0.85 });

      const learningTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".learning-story",
          start: "top top",
          end: "+=2800",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      learningTl
        .to(".step-1", { opacity: 1, scale: 1 })
        .to(".step-1", { opacity: 0, scale: 0.85 }, "+=0.5")
        .to(".step-2", { opacity: 1, scale: 1 })
        .to(".step-2", { opacity: 0, scale: 0.85 }, "+=0.5")
        .to(".step-3", { opacity: 1, scale: 1 })
        .to(".step-3", { opacity: 0, scale: 0.85 }, "+=0.5")
        .to(".step-4", { opacity: 1, scale: 1 });

      // WHY ITEMS
      gsap.utils.toArray(".why-item").forEach((item) => {
        gsap.from(item, {
          x: item.classList.contains("reveal-left") ? -80 : 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // FEATURED
      gsap.from(".premium-card", {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".featured-grid", start: "top 82%" },
      });

      // CONTACT
      gsap.from(".contact-cta__content", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-cta", start: "top 75%" },
      });
    });

    // Force refresh after everything mounts
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []); // ← Empty dependency is intentional

  if (isLoading) return <LoadingState message="Loading Topics..." />;
  if (error) return <ErrorState message="Failed To Load Topics" />;
  if (!data?.data?.length) return <EmptyState message="No Topics Found" />;

  const featuredTopics = data.data.slice(0, 3);

  return (
    <PageContainer>
      {/* HERO */}
      <section className="topics-hero">
        <div className="hero-orb" />
        <div className="hero-grid" />
        <span className="topics-badge">JavaScript Revision Platform</span>
        <h1 className="topics-title">
          Master JavaScript Through Structured Revision
        </h1>
        <p className="topics-description">
          Learn from beginner to advanced concepts with real code examples,
          interview notes, revision-friendly explanations and practical
          JavaScript knowledge.
        </p>

        <div className="hero-actions">
          <Link to="/topics" className="hero-btn hero-btn--primary">
            🚀 Explore Topics
          </Link>
          <Link
            to="/background-behind-site"
            className="hero-btn hero-btn--secondary"
          >
            📖 Behind The Site
          </Link>
        </div>
      </section>

      {/* CONCEPT WALL */}
      <section className="concept-wall">
        <div className="section-tag">JAVASCRIPT ECOSYSTEM</div>
        <div ref={trackRef} className="topics-track">
          {[
            "Closures",
            "Promises",
            "Async Await",
            "Objects",
            "Arrays",
            "DOM",
            "Events",
            "Classes",
            "Prototypes",
          ].map((word) => (
            <div key={word} className="topic-word">
              {word}
            </div>
          ))}
        </div>
      </section>

      {/* STATS WALL */}
      <section className="stats-wall">
        <div className="stats-bg" />
        <div className="wall-item">
          <h2>
            <CountUp end={data.data.length} duration={2} />
          </h2>
          <p>JavaScript Topics</p>
        </div>
        <div className="wall-item">
          <h2>
            <CountUp end={1500} duration={2} />+
          </h2>
          <p>Code Snippets</p>
        </div>
        <div className="wall-item">
          <h2>
            <CountUp end={100} duration={2} />+
          </h2>
          <p>Interview Concepts</p>
        </div>
      </section>

      {/* LEARNING STORY */}
      <section className="learning-story">
        <div className="story-progress" />
        <div className="learning-step step-1">
          <span>01</span>
          <h2>Basics</h2>
          <p>Variables, Data Types, Memory, Strings</p>
        </div>
        <div className="learning-step step-2">
          <span>02</span>
          <h2>Core Concepts</h2>
          <p>Arrays, Objects, Functions, Scope</p>
        </div>
        <div className="learning-step step-3">
          <span>03</span>
          <h2>Advanced JS</h2>
          <p>Closures, Prototypes, Classes</p>
        </div>
        <div className="learning-step step-4">
          <span>04</span>
          <h2>Interview Prep</h2>
          <p>Real Questions & Revision Notes</p>
        </div>
      </section>

      {/* WHY CHAISCRIPT */}
      <section className="why-chaiscript">
        <div className="why-left">
          <h2>Why ChaiScript?</h2>
        </div>
        <div className="why-right">
          {[
            { text: "📘 Structured Notes", side: "reveal-left" },
            { text: "💻 Real Code Examples", side: "reveal-right" },
            { text: "🎯 Interview Concepts", side: "reveal-left" },
            { text: "⚡ Quick Revision", side: "reveal-left" },
            { text: "🌙 Dark Mode", side: "reveal-right" },
            { text: "🚀 Beginner Friendly", side: "reveal-left" },
          ].map((item, i) => (
            <div key={i} className={`why-item ${item.side}`}>
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED TOPICS */}
      {/* <section className="featured-topics">
        <h2>Popular Topics</h2>
        <div className="featured-grid">
          {featuredTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="premium-card"
            >
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </Link>
          ))}
        </div>
      </section> */}

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <div className="cta-orb" />
        <div className="cta-grid" />
        <div className="contact-cta__content">
          <span className="contact-badge">
            🚀 Let's Build Better JavaScript Knowledge
          </span>
          <h2>Have A Topic Suggestion, Question, Or Feedback?</h2>
          <p>
            ChaiScript is continuously evolving. If you've found a bug, want a
            topic covered...
          </p>
          <div className="contact-actions">
            <a
              href="mailto:yashprime000@gmail.com"
              className="hero-btn hero-btn--primary"
            >
              ✉️ Send Email
            </a>
            <a
              href="mailto:yashprime000@gmail.com?subject=ChaiScript%20Topic%20Suggestion"
              className="hero-btn hero-btn--primary"
            >
              💡 Suggest Topic
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
