import TopicCard from "./TopicCard";
export default function TopicGrid({ topics }) {
  return (
    <div className="topics-grid">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
        />
      ))}
    </div>
  );
}
