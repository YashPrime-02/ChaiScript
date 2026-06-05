import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageContainer from "../../layouts/PageContainer";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useTopics } from "../../api/queries";
import "../../styles/home.css";
import CountUpModule from "react-countup";

export default function Home() {
  const CountUp = CountUpModule.default;
  const { data, isLoading, error } = useTopics();

  if (isLoading) {
    return <LoadingState message="Loading Topics..." />;
  }

  if (error) {
    return <ErrorState message="Failed To Load Topics" />;
  }

  if (!data?.data?.length) {
    return <EmptyState message="No Topics Found" />;
  }

  const featuredTopics = data.data.slice(0, 3);

  return (
    <PageContainer>
      <motion.section
        className="topics-hero"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="topics-hero__content">
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
        </div>
      </motion.section>

      <section className="stats-grid">
        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >
          <h3>
            <CountUp end={data.data.length} duration={2} />
          </h3>

          <p>JavaScript Topics</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >
          <h3>
            <CountUp end={1500} duration={2} />+
          </h3>

          <p>Code Snippets</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >
          <h3>
            <CountUp end={100} duration={2} />+
          </h3>

          <p>Interview Concepts</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >
          <h3>24/7</h3>

          <p>Free Learning</p>
        </motion.div>
      </section>

      <section className="featured-topics">
        <h2>Popular Topics</h2>

        <div className="featured-grid">
          {featuredTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="featured-card"
            >
              <h3>{topic.title}</h3>

              <p>{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="learning-path">
        <h2>Structured Learning Journey</h2>

        <p>
          Follow a roadmap from JavaScript fundamentals to advanced concepts.
        </p>

        <div className="path-grid">
          <div className="path-card">
            <span>01</span>

            <h3>Basics</h3>

            <p>Variables, Data Types, Memory, Strings</p>
          </div>

          <div className="path-card">
            <span>02</span>

            <h3>Core Concepts</h3>

            <p>Arrays, Objects, Functions, Scope</p>
          </div>

          <div className="path-card">
            <span>03</span>

            <h3>Advanced JS</h3>

            <p>Closures, Prototypes, Classes</p>
          </div>

          <div className="path-card">
            <span>04</span>

            <h3>Interview Prep</h3>

            <p>Real Questions & Revision Notes</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why ChaiScript?</h2>

        <div className="features-grid">
          <div className="feature-card">📘 Structured Notes</div>

          <div className="feature-card">💻 Real Code Examples</div>

          <div className="feature-card">🎯 Interview Concepts</div>

          <div className="feature-card">⚡ Quick Revision</div>

          <div className="feature-card">🌙 Dark Mode</div>

          <div className="feature-card">🚀 Beginner Friendly</div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta__glow"></div>

        <div className="contact-cta__content">
          <span className="contact-badge">
            🚀 Let's Build Better JavaScript Knowledge
          </span>

          <h2>Have A Topic Suggestion, Question, Or Feedback?</h2>

          <p>
            ChaiScript is continuously evolving. If you've found a bug, want a
            topic covered, have interview insights to share, or simply want to
            connect, I'd love to hear from you.
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
