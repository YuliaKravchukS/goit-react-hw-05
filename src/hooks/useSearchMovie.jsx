import { useEffect, useState } from "react";
import { requestMoviesByTittle, requestMoviesTrend } from "../server/api";

export const useSearchMovie = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovieTrend() {
      try {
        const moviesData = await requestMoviesTrend();

        setMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieTrend();
  }, []);

  useEffect(() => {
    if (title.length === 0) return;

    async function fetchMoviesByTittle(title) {
      try {
        const { data } = await requestMoviesByTittle(title);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMoviesByTittle();
  }, [title]);

  return { movies };
};
