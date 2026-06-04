import TopicSection from "./TopicSection";

export default function TopicContent({ sections }) {
  return (
    <>
      {sections.map((section, index) => (
        <TopicSection
          key={index}
          section={section}
        />
      ))}
    </>
  );
}

