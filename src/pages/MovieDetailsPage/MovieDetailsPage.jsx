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
  // const backgroundImg = `${urlImg}${movieDetails.backdrop_path}`;

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
          <div
            className={css.wrapCard}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${urlImg}${movieDetails.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className={css.cardImg}>
              <img
                className={css.image}
                src={`${urlImg}${movieDetails.poster_path}`}
                alt={movieDetails.original_title}
              />
            </div>
            <div className={css.cardDetails}>
              <h2>{movieDetails.title}</h2>

              {movieDetails.vote_average ? (
                <span>{`User Score: ${Math.round(
                  movieDetails.vote_average * 10
                )}%`}</span>
              ) : (
                ""
              )}

              {movieDetails.budget ? (
                <>
                  <p className={css.cardText}>
                    <b>Budget</b>
                  </p>
                  <span>
                    {movieDetails.budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </>
              ) : (
                ""
              )}
              {movieDetails.runtime ? (
                <>
                  <p className={css.cardText}>
                    <b>Runtime</b>
                  </p>
                  <span>
                    {Math.floor(movieDetails.runtime / 60)} hours{" "}
                    {movieDetails.runtime % 60} minutes
                  </span>
                </>
              ) : (
                ""
              )}

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
              <p className={css.cardText}>
                <b>Production companies</b>
              </p>
              <span className={css.productionCompanie}>
                {movieDetails.production_companies.map((productionCompanie) => {
                  return (
                    <div key={productionCompanie.id}>
                      <p>{productionCompanie.name}</p>
                      {productionCompanie.logo_path && (
                        <img
                          src={`${urlImg}${productionCompanie.logo_path}`}
                          alt={productionCompanie.name}
                          width="100"
                          height="100"
                          style={{
                            backgroundColor: "rgba(139, 136, 136, 0.3)",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </span>
              {movieDetails.homepage && (
                <>
                  <p className={css.cardText}>
                    <b>Homepage</b>
                  </p>
                  <span>{movieDetails.homepage}</span>
                </>
              )}
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
