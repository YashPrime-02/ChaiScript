import PageContainer from "./../../layouts/PageContainer";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";

import { useTopics } from "../../api/queries";

function Home() {
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
      <EmptyState message="No Topics Found" />
    );
  }

  return (
    <PageContainer>
      <h1>Topics Loaded</h1>

      <p>
        Total Topics:
        {data.totalTopics}
      </p>
    </PageContainer>
  );
}

export default Home;