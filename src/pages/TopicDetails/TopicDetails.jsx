import { useParams } from "react-router-dom";

import PageContainer from "../../layouts/PageContainer";

import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";

import TopicContent from "../../components/code/TopicContent";

import { useTopic } from "../../api/queries";

export default function TopicDetails() {
  const { topicId } = useParams();

  const {
    data,
    isLoading,
    error,
  } = useTopic(topicId);

  if (isLoading) {
    return (
      <LoadingState message="Loading Topic..." />
    );
  }

  if (error) {
    return (
      <ErrorState message="Failed To Load Topic" />
    );
  }

  const topic = data?.data;

  // console.log("========== TOPIC ==========");
  // console.log("Topic:", topic);
  // console.log("Sections:", topic?.sections);
  // console.log("Sections Length:", topic?.sections?.length);
  // console.log("===========================");

  if (!topic?.sections?.length) {
    return (
      <EmptyState message="Topic Not Found" />
    );
  }

  return (
    <PageContainer>
      <h1>{topic.title}</h1>

      <p>{topic.description}</p>

      <TopicContent
        sections={topic.sections}
      />
    </PageContainer>
  );
}