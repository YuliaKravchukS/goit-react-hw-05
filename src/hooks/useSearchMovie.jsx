import { useEffect, useState } from "react";
import { requestMoviesByTittle, requestMoviesTrend } from "../server/api";

export const useSearchMovie = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    async function fetchMovieTrend() {
      try {
        setIsLoader(true);
        const moviesData = await requestMoviesTrend();

        setMovies(moviesData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMovieTrend();
  }, []);

  useEffect(() => {
    if (title.length === 0) return;

    async function fetchMoviesByTittle() {
      try {
        setIsLoader(true);
        const dataSearchByTitle = await requestMoviesByTittle(title);
        setMovies(dataSearchByTitle);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMoviesByTittle();
  }, [title]);

  const onSetSearchTitle = (searchInput) => {
    setTitle(searchInput);
  };

  return { movies, isLoader, onSetSearchTitle };
};
