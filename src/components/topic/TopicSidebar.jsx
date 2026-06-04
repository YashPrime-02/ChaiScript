export default function TopicSidebar({
  sections,
  activeSection,
}) {
  return (
    <aside className="topic-sidebar">

      <h3 className="topic-sidebar__heading">
        Sections
      </h3>

      <nav className="topic-sidebar__nav">

        {sections.map((section, index) => (

          <a
            key={index}
            href={`#section-${index}`}
            className={
              activeSection === index
                ? "topic-sidebar__link active"
                : "topic-sidebar__link"
            }
          >
            {section.title}
          </a>

        ))}

      </nav>

    </aside>
  );
}