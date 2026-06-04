import TopicSection from "./TopicSection";

export default function TopicContent({
  sections,
}) {
  return (
    <div className="topic-content">

      {sections.map(
        (section, index) => (
          <TopicSection
            key={index}
            index={index}
            section={section}
          />
        )
      )}

    </div>
  );
}