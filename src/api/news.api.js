import axios from "axios";

const NEWS_BASE_URL = import.meta.env.VITE_DEVTO_API;

export const fetchWebDevNews = async (limit = 6) => {
  try {
    const response = await axios.get(`${NEWS_BASE_URL}/articles`, {
      params: {
        per_page: limit,
        tag: "webdev",
      },
      timeout: 8000,
    });

    return response.data;
  } catch (error) {
    console.error("News fetch error:", error);
    throw new Error("Failed to load latest tech news");
  }
};