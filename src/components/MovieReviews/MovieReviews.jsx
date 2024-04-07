import { useParams } from "react-router-dom";
// import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { requestMovieReviews } from "../../server/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoaderMoviePage, setIsLoaderMoviePage] = useState(false);
  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsLoaderMoviePage(true);
        const dataReviews = await requestMovieReviews(movieId);
        setMovieReviews(dataReviews.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaderMoviePage(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {movieReviews.length !== 0 ? (
          movieReviews.map((review) => (
            <li key={review.id}>
              <p>
                <b>{`Author: ${review.author}`}</b>
              </p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie.</p>
        )}
      </ul>
      {isLoaderMoviePage && <Loader />}
    </>
  );
};

export default MovieReviews;
