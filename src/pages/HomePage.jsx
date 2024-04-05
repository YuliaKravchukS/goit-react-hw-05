import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import { useSearchMovie } from "../hooks/useSearchMovie";

const HomePage = () => {
  const { movies, isLoader } = useSearchMovie();
  return (
    <div>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
      {isLoader && <Loader />}
    </div>
  );
};

export default HomePage;
