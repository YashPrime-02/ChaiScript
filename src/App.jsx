import AppRoutes from "./routes/AppRoutes";
import './index.css';
import { Analytics } from "@vercel/analytics/react";   // ← Correct for Vite/React

function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
}

export default App;