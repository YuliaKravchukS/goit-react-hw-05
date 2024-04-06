import { useEffect, useState } from "react";
import { requestMoviesByTittle, requestMoviesTrend } from "../server/api";
import { useSearchParams } from "react-router-dom";

export const useSearchMovie = ({ isSearchPage = false }) => {
  // const [title, setTitle] = useState("");
  const [movies, setMovies] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  useEffect(() => {
    if (isSearchPage) return;
    async function fetchMovieTrend() {
      try {
        setIsLoader(true);
        const moviesData = await requestMoviesTrend();

        setMovies(
          moviesData.toSorted((a, b) => a.title.localeCompare(b.title))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMovieTrend();
  }, [isSearchPage]);

  useEffect(() => {
    // if (title.length === 0) return;
    if (!title) return;

    async function fetchMoviesByTittle() {
      try {
        setIsLoader(true);
        const dataSearchByTitle = await requestMoviesByTittle(title);
        setMovies(
          dataSearchByTitle.toSorted((a, b) => a.title.localeCompare(b.title))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMoviesByTittle();
  }, [title]);

  const onSetSearchTitle = (searchInput) => {
    // setTitle(searchInput);
    setSearchParams({ title: searchInput });
  };

  return { movies, isLoader, onSetSearchTitle };
};
