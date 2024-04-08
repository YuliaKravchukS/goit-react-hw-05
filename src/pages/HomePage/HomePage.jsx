import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchMovie } from "../../hooks/useSearchMovie";

import css from "./HomePage.module.css";
const HomePage = () => {
  const { movies, isLoader } = useSearchMovie({
    isSearchPage: false,
  });
  return (
    <div className={css.HomePage}>
      <h1 className={css.text}>Trending today</h1>
      {movies && <MovieList movies={movies} />}
      {isLoader && <Loader />}
    </div>
  );
};

export default HomePage;
