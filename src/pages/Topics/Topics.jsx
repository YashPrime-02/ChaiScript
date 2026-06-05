import { useState } from "react";

import PageContainer from "../../layouts/PageContainer";

import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";

import TopicGrid from "../../components/cards/TopicGrid";
import SearchBar from "../../components/search/SearchBar";

import { useTopics } from "../../api/queries";

import "../../styles/search.css";

function Topics() {

  const [searchTerm, setSearchTerm] =
    useState("");

  const {
    data,
    isLoading,
    error,
  } = useTopics();

  if (isLoading) {
    return (
      <LoadingState
        message="Loading Topics..."
      />
    );
  }

  if (error) {
    return (
      <ErrorState
        message="Failed To Load Topics"
      />
    );
  }

  if (!data?.data?.length) {
    return (
      <EmptyState />
    );
  }

  const filteredTopics =
    data.data.filter((topic) => {

      const search =
        searchTerm.toLowerCase();

      return (
        topic.title
          ?.toLowerCase()
          .includes(search)

        ||

        topic.description
          ?.toLowerCase()
          .includes(search)

        ||

        topic.id
          ?.toLowerCase()
          .includes(search)
      );

    });

  if (!filteredTopics.length) {

    return (
      <PageContainer>

        <h1>
          JavaScript Topics
        </h1>

        <SearchBar
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          placeholder="Search JavaScript Topics..."
        />

        <EmptyState
          message="No Topics Found"
        />

      </PageContainer>
    );
  }

  return (
    <PageContainer>

      <h1>
        JavaScript Topics
      </h1>

      <SearchBar
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        placeholder="Search JavaScript Topics..."
      />

      <p
        style={{
          marginBottom: "1.5rem",
        }}
      >
        {filteredTopics.length} Topics Found
      </p>

      <TopicGrid
        topics={filteredTopics}
      />

    </PageContainer>
  );
}

export default Topics;