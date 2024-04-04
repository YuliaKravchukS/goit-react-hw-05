import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import {
  requestMovieReviews,
  requestMoviesById,
  requestMoviesCast,
} from "../server/api";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";

const urlImg = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const dataById = await requestMoviesById(movieId);
        setMovieDetails(dataById);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const dataCast = await requestMoviesCast(movieId);
        console.log("dataCast: ", dataCast.cast);
        setMovieCast(dataCast.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const dataReviews = await requestMovieReviews(movieId);
        console.log("dataReviews: ", dataReviews.results);
        setMovieReviews(dataReviews.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <Link to="/">Go back</Link>
      {movieDetails !== null && (
        <div>
          <div>
            <img
              src={`${urlImg}${movieDetails.backdrop_path}`}
              alt={movieDetails.original_title}
            />
            <h2>{movieDetails.title}</h2>
            <span>{`User Score:${Math.round(
              movieDetails.vote_average * 10
            )}%`}</span>
            <p>Overview</p>
            <span>{movieDetails.overview}</span>
            <p>Genres</p>
            <span>
              {movieDetails.genres.map((genre) => genre.name).join(" ")}
            </span>
          </div>
          <div>
            <p>Additional information</p>
            <Link to="cast">Casts</Link>
            <Link to="reviews">Reviews</Link>
            <Routes>
              <Route
                path="cast"
                element={<MovieCast movieCast={movieCast} urlImg={urlImg} />}
              />
              <Route
                path="reviews"
                element={<MovieReviews movieReviews={movieReviews} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
