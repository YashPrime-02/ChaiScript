import axios from "axios";

const NEWS_BASE_URL = import.meta.env.VITE_DEVTO_API;

export const fetchWebDevNews = async (limit = 6) => {
  try {
    if (!NEWS_BASE_URL) {
      console.error("VITE_DEVTO_API is missing");
      return [];
    }

    const response = await axios.get(
      `${NEWS_BASE_URL}/articles`,
      {
        params: {
          per_page: limit,
          tag: "webdev",
        },
        timeout: 8000,
      }
    );

    const data = response?.data;

    // Production safety check
    if (!Array.isArray(data)) {
      console.error(
        "DEV.to returned unexpected data:",
        data
      );

      return [];
    }

    return data;
  } catch (error) {
    console.error(
      "News fetch error:",
      error?.response?.data || error
    );

    return [];
  }
};