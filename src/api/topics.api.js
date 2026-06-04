import api from "./axios";

export const getAllTopics = async () => {
  const response = await api.get("/topics");

  return response.data;
};

export const getTopicById = async (topicId) => {
  const response = await api.get(
    `/topics/${topicId}`
  );

  return response.data;
};