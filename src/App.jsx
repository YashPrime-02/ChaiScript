import AppRoutes from "./routes/AppRoutes";
import './index.css';
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
}

export default App;