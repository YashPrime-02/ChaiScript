import { Outlet } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;