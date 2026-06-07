import React, { useState, useEffect, useCallback } from "react";
import { fetchWebDevNews } from "../../api/news.api";
import "../../styles/news.css";

const TechNewsBulletin = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const articles = await fetchWebDevNews(6);
      setNews(articles);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();

    // Optional: Auto refresh every 10 minutes
    const interval = setInterval(loadNews, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [loadNews]);

  return (
    <section className="tech-news-section">
      <div className="section-header">
        <span className="section-tag">LIVE UPDATES</span>
        <h2>Web Dev Bulletin</h2>
        <p>
          Latest articles, tutorials &amp; trends from the JavaScript ecosystem
        </p>
      </div>

      {loading && (
        <div className="news-loading">Fetching fresh tech news...</div>
      )}
      {error && (
        <div className="news-error">
          {error} <button onClick={loadNews}>Retry</button>
        </div>
      )}

      <div className="news-grid">
        {news.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
          >
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt={article.title}
                className="news-image"
                loading="lazy"
              />
            )}
            <div className="news-content">
              <div className="news-meta">
                <span className="news-tag">
                  #{article.tag_list?.[0] || "webdev"}
                </span>
                <span className="news-date">
                  {new Date(article.published_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description?.slice(0, 130)}...</p>
              <div className="news-author">by {article.user?.name}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="news-footer">
        Powered by{" "}
        <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
          dev.to
        </a>
      </div>
    </section>
  );
};

export default TechNewsBulletin;
