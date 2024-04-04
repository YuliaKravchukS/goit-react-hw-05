// import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
// import { requestMoviesTrend } from "../server/api";
import { useSearchMovie } from "../hooks/useSearchMovie";

const HomePage = () => {
  //const [movies, setMovies] = useState(null);
  // useEffect(() => {
  //   async function fetchMovieTrend() {
  //     try {
  //       const moviesData = await requestMoviesTrend();

  //       setMovies(moviesData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchMovieTrend();
  // }, []);
  const { movies } = useSearchMovie();
  return (
    <div>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
