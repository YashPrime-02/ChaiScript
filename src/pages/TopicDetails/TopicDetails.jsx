import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PageContainer from "../../layouts/PageContainer";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import TopicContent from "../../components/code/TopicContent";
import TopicSidebar from "../../components/topic/TopicSidebar";
import { useTopic } from "../../api/queries";
import "../../styles/topic-details.css";
import ReadingProgress from "../../components/topic/ReadingProgress";

export default function TopicDetails() {
  const { topicId } = useParams();

  const [activeSection, setActiveSection] = useState(0);

  const { data, isLoading, error } = useTopic(topicId);
  const [forceExpand, setForceExpand] = useState(null);
  const topic = data?.data;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".topic-section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topic]);

  if (isLoading) {
    return <LoadingState message="Loading Topic..." />;
  }

  if (error) {
    return <ErrorState message="Failed To Load Topic" />;
  }

  if (!topic?.sections?.length) {
    return <EmptyState message="Topic Not Found" />;
  }

  return (
    <>
      <ReadingProgress />
      <PageContainer>
        <section className="topic-hero">
          <span className="topic-badge">
            {topic.difficulty || "JavaScript"}
          </span>

          <h1 className="topic-title">{topic.title}</h1>

          <p className="topic-description">{topic.description}</p>

          <div className="topic-meta">
            <span>📚 {topic.sections.length} Sections</span>
          </div>

          
        </section>

        <div className="topic-layout">
          <TopicSidebar
            sections={topic.sections}
            activeSection={activeSection}
          />

          <TopicContent sections={topic.sections} />
        </div>
      </PageContainer>
    </>
  );
}
