import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import NotFoundPage from "./NotFoundPage";

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={"/"}>HomePage</NavLink>
          <NavLink to={"/movies"}>MoviesPage</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default Navigation;
