import MovieList from "../components/MovieList/MovieList";
import { useSearchMovie } from "../hooks/useSearchMovie";

const MoviesPage = () => {
  const { movies } = useSearchMovie();
  return <div>{movies && <MovieList movies={movies} />}</div>;
};

export default MoviesPage;
