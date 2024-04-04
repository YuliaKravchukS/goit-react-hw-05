import MovieList from "../components/MovieList/MovieList";
import { useSearchMovie } from "../hooks/useSearchMovie";

const HomePage = () => {
  const { movies } = useSearchMovie();
  return (
    <div>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
