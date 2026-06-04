import { useQuery } from "@tanstack/react-query";

import {
  getAllTopics,
  getTopicById,
} from "./topics.api";

export const useTopics = () => {
  return useQuery({
    queryKey: ["topics"],
    queryFn: getAllTopics,
  });
};

export const useTopic = (topicId) => {
  return useQuery({
    queryKey: ["topic", topicId],
    queryFn: () => getTopicById(topicId),
    enabled: !!topicId,
  });
};