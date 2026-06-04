import PageContainer from "./../../layouts/PageContainer";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import TopicGrid from "../../components/cards/TopicGrid";

import { useTopics } from "../../api/queries";

function Topics() {

  const {
    data,
    isLoading,
    error,
  } = useTopics();

  if (isLoading) {
    return (
      <LoadingState message="Loading Topics..." />
    );
  }

  if (error) {
    return (
      <ErrorState message="Failed To Load Topics" />
    );
  }

  if (!data?.data?.length) {
    return (
      <EmptyState />
    );
  }

  return (
    <PageContainer>

      <h1>
        JavaScript Topics
      </h1>

      <TopicGrid
        topics={data.data}
      />

    </PageContainer>
  );
}

export default Topics;