import { useRef } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../layouts/PageContainer";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";

import { useTopics } from "../../api/queries";
import CountUpModule from "react-countup";

import "../../styles/Home.css";

export default function Home() {
  const CountUp = CountUpModule.default;
  const { data, isLoading, error } = useTopics();

  const ecosystemConcepts = [
    {
      icon: "🔒",
      title: "Closures",
      description: "Master lexical scope and function memory.",
    },
    {
      icon: "🤝",
      title: "Promises",
      description: "Handle asynchronous operations elegantly.",
    },
    {
      icon: "⚡",
      title: "Async Await",
      description: "Write cleaner asynchronous JavaScript.",
    },
    {
      icon: "📦",
      title: "Objects",
      description: "Understand data structures and references.",
    },
    {
      icon: "📚",
      title: "Arrays",
      description: "Work efficiently with collections of data.",
    },
    {
      icon: "🌐",
      title: "DOM",
      description: "Manipulate web pages dynamically.",
    },
    {
      icon: "🎯",
      title: "Events",
      description: "Respond to user interactions effectively.",
    },
    {
      icon: "🏗️",
      title: "Classes",
      description: "Build reusable object-oriented structures.",
    },
    {
      icon: "🧬",
      title: "Prototypes",
      description: "Understand JavaScript inheritance deeply.",
    },
  ];

  const features = [
    {
      icon: "📘",
      title: "Structured Notes",
    },
    {
      icon: "💻",
      title: "Real Code Examples",
    },
    {
      icon: "🎯",
      title: "Interview Concepts",
    },
    {
      icon: "⚡",
      title: "Quick Revision",
    },
    {
      icon: "🌙",
      title: "Dark Mode",
    },
    {
      icon: "🚀",
      title: "Beginner Friendly",
    },
  ];

  if (isLoading) return <LoadingState message="Loading Topics..." />;
  if (error) return <ErrorState message="Failed To Load Topics" />;
  if (!data?.data?.length) return <EmptyState message="No Topics Found" />;

  return (
    <PageContainer>
      <main id="main-content">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__bg-orb hero__bg-orb--one" />
          <div className="hero__bg-orb hero__bg-orb--two" />

          <div className="hero__content">
            <span className="hero__badge">JavaScript Revision Platform</span>

            <h1 id="hero-heading" className="hero__title">
              Master JavaScript
              <span> Through Structured Revision</span>
            </h1>

            <p className="hero__description">
              Learn from beginner to advanced concepts with real code examples,
              interview notes, revision-friendly explanations and practical
              JavaScript knowledge.
            </p>

            <div className="hero__actions">
              <Link
                to="/topics"
                className="btn btn--primary"
                aria-label="Explore JavaScript Topics"
              >
                🚀 Explore Topics
              </Link>

              <Link
                to="/background-behind-site"
                className="btn btn--secondary"
                aria-label="Read Background Behind The Site"
              >
                📖 Behind The Site
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            Platform Statistics
          </h2>

          <div className="stats__grid">
            <article className="stat-card">
              <span className="stat-card__label">Topics</span>

              <h3>
                <CountUp end={data.data.length} duration={2} />
              </h3>

              <p>JavaScript Topics</p>
            </article>

            <article className="stat-card">
              <span className="stat-card__label">Snippets</span>

              <h3>
                <CountUp end={1500} duration={2} />+
              </h3>

              <p>Code Snippets</p>
            </article>

            <article className="stat-card">
              <span className="stat-card__label">Interviews</span>

              <h3>
                <CountUp end={100} duration={2} />+
              </h3>

              <p>Interview Concepts</p>
            </article>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section className="ecosystem" aria-labelledby="ecosystem-heading">
          <div className="section-header">
            <span className="section-tag">JAVASCRIPT ECOSYSTEM</span>

            <h2 id="ecosystem-heading">Core Concepts You Need</h2>

            <p>
              Build a strong JavaScript foundation through practical concepts
              used in real-world development.
            </p>
          </div>

          <div className="ecosystem__grid">
            {ecosystemConcepts.map((item) => (
              <article
                key={item.title}
                className="ecosystem-card"
                tabIndex="0"
                aria-label={item.title}
              >
                <span className="ecosystem-card__icon" aria-hidden="true">
                  {item.icon}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="why" aria-labelledby="why-heading">
          <div className="why__left">
            <span className="section-tag">WHY CHAISCRIPT</span>

            <h2 id="why-heading">Revision Built For Developers</h2>

            <p>
              Designed specifically for developers who want structured learning,
              interview preparation, and quick revision resources.
            </p>
          </div>

          <div className="why__right">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="feature-card"
                tabIndex="0"
              >
                <span className="feature-card__icon" aria-hidden="true">
                  {feature.icon}
                </span>

                <span className="feature-card__title">{feature.title}</span>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" aria-labelledby="contact-heading">
          <div className="contact__content">
            <span className="contact__badge">
              🚀 Let's Build Better JavaScript Knowledge
            </span>

            <h2 id="contact-heading">
              Have A Topic Suggestion, Question, Or Feedback?
            </h2>

            <p>
              ChaiScript is continuously evolving. I'd love to hear from you.
            </p>

            <div className="contact__actions">
              <a
                href="mailto:yashprime000@gmail.com"
                className="btn btn--primary"
                aria-label="Send Email"
              >
                ✉️ Send Email
              </a>

              <a
                href="mailto:yashprime000@gmail.com?subject=ChaiScript%20Topic%20Suggestion"
                className="btn btn--secondary"
                aria-label="Suggest A Topic"
              >
                💡 Suggest Topic
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
