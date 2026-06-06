import AppRoutes from "./routes/AppRoutes";
import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      {" "}
      <AppRoutes /> <Analytics />{" "}
    </HelmetProvider>
  );
}

export default App;
