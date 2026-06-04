import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import '../styles/globals.css';
import '../styles/animations.css';
import '../styles/variables.css';
import '../styles/layout.css';

// Lazy Pages
const Home = lazy(() => import("../pages/Home/Home"));
const Topics = lazy(() => import("../pages/Topics/Topics"));
const TopicDetails = lazy(() => import("../pages/TopicDetails/TopicDetails"));
const Search = lazy(() => import("../pages/Search/Search"));
const BackgroundBehindSite = lazy(() =>
  import("../pages/BackgroundBehindSite/BackgroundBehindSite")
);
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>

          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />

            <Route path="/topics" element={<Topics />} />

            <Route
              path="/topic/:topicId"
              element={<TopicDetails />}
            />

            <Route path="/search" element={<Search />} />

            <Route
              path="/background-behind-site"
              element={<BackgroundBehindSite />}
            />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;