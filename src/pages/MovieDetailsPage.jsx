import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { requestMoviesById } from "../server/api";

const urlImg = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails, setMovieDetails } = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const { data } = await requestMoviesById(movieId);
        console.log("data: ", data);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to="/">Go back</Link>
      {movieDetails !== null && (
        <div>
          {/* <img
            src={`${urlImg}${movieDetails.backdrop_path}`}
            alt={movieDetails.original_title}
          />
          <h2>{movieDetails.title}</h2>
          <span>`${movieDetails.popularity}%`</span>
          <p>Overview</p>
          <span>{movieDetails.overview}</span>
          <p>Genres</p>
          <span>{movieDetails.genres.name}</span> */}
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
