import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "./context/ThemeContext";

import App from "./App";

import "./styles/topic.css";
import "./styles/cards.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {" "}
    <QueryClientProvider client={queryClient}>
      {" "}
      <App />{" "}
    </QueryClientProvider>{" "}
  </ThemeProvider>,
);
