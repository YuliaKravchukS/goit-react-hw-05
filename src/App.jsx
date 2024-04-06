// import { useState } from "react";
import { Suspense, lazy } from "react";
import clsx from "clsx";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import Navigation from "./pages/Navigation";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Navigation = lazy(() => import("./pages/Navigation/Navigation"));

function App() {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
