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
  const totalTopics =
  filteredTopics.length;
  
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

    <main
      className="topics-page"
      aria-labelledby="topics-heading"
    >

      {/* HERO */}

      <section
        className="topics-hero"
        aria-labelledby="topics-heading"
      >

        <div className="topics-hero__orb topics-hero__orb--one" />
        <div className="topics-hero__orb topics-hero__orb--two" />

        <div className="topics-hero__content">

          <span className="topics-hero__badge">
            JavaScript Revision Platform
          </span>

          <h1
            id="topics-heading"
            className="topics-hero__title"
          >
            JavaScript Topics
          </h1>

          <p className="topics-hero__description">
            Explore structured JavaScript concepts,
            interview preparation material,
            revision notes, and practical examples.
          </p>

          <div
            className="topics-search"
            role="search"
          >
            <SearchBar
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              placeholder="Search JavaScript Topics..."
            />
          </div>

          <div
            className="topics-stats"
            aria-live="polite"
          >
            <span>
              {totalTopics}
            </span>

            Topics Available
          </div>

        </div>

      </section>

      <section
        className="topics-grid-section"
        aria-label="JavaScript Topics List"
      >

        <TopicGrid
          topics={filteredTopics}
        />

      </section>

    </main>

  </PageContainer>
);
}

export default Topics;