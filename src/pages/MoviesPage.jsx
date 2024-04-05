import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";
import { useSearchMovie } from "../hooks/useSearchMovie";

const MoviesPage = () => {
  const { movies, isLoader, onSetSearchTitle } = useSearchMovie();
  return (
    <div>
      <SearchForm onSetSearchTitle={onSetSearchTitle} />
      {movies && <MovieList movies={movies} />}
      {isLoader && <Loader />}
    </div>
  );
};

export default MoviesPage;
