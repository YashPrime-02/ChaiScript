import { Link } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <Link
      to={`/topic/${topic.id}`}
      className="topic-card"
    >
      <h3>{topic.title}</h3>

      <p>{topic.description}</p>

      <div className="topic-meta">

        <span>
          {topic.difficulty}
        </span>

        <span>
          {topic.estimatedReadTime}
        </span>

      </div>

    </Link>
  );
}
