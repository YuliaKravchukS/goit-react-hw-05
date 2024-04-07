import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import {
  // requestMovieReviews,
  requestMoviesById,
  // requestMoviesCast,
} from "../../server/api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
const urlImg = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const [isLoaderMoviePage, setIsLoaderMoviePage] = useState(false);
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  //const [movieCast, setMovieCast] = useState(null);
  // const [movieReviews, setMovieReviews] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoaderMoviePage(true);
        const dataById = await requestMoviesById(movieId);
        setMovieDetails(dataById);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaderMoviePage(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  // useEffect(() => {
  //   async function fetchMovieCast() {
  //     try {
  //       setIsLoaderMoviePage(true);
  //       const dataCast = await requestMoviesCast(movieId);
  //       setMovieCast(dataCast.cast);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoaderMoviePage(false);
  //     }
  //   }

  //   fetchMovieCast();
  // }, [movieId]);

  // useEffect(() => {
  //   async function fetchMovieReviews() {
  //     try {
  //       setIsLoaderMoviePage(true);
  //       const dataReviews = await requestMovieReviews(movieId);
  //       setMovieReviews(dataReviews.results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoaderMoviePage(false);
  //     }
  //   }

  //   fetchMovieReviews();
  // }, [movieId]);

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      {movieDetails !== null && (
        <div>
          <div className={css.wrapCard}>
            <div className={css.cardImg}>
              <img
                className={css.image}
                src={`${urlImg}${movieDetails.backdrop_path}`}
                alt={movieDetails.original_title}
              />
            </div>
            <div className={css.cardDetails}>
              <h2>{movieDetails.title}</h2>
              <span>{`User Score:${Math.round(
                movieDetails.vote_average * 10
              )}%`}</span>
              <p className={css.cardText}>
                <b>Overview</b>
              </p>
              <span>{movieDetails.overview}</span>
              <p className={css.cardText}>
                <b>Genres</b>
              </p>
              <span>
                {movieDetails.genres.map((genre) => genre.name).join(" ")}
              </span>
            </div>
          </div>
          <div className={css.wrapAddInfo}>
            <p>Additional information</p>
            <ul className={css.AddInfoList}>
              <li>
                <Link to="cast">Casts</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>

          {isLoaderMoviePage && <Loader />}
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
