export default function TopicSection({ section }) {
  return (
    <section className="topic-section">

      <h2>
        {section.title}
      </h2>

      <pre>
        <code>
          {section.rawCode}
        </code>
      </pre>

    </section>
  );
}