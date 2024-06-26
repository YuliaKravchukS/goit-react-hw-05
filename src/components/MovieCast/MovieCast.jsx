import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { requestMoviesCast } from "../../server/api";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const urlImg = "https://image.tmdb.org/t/p/w500";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoaderMoviePage, setIsLoaderMoviePage] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setIsLoaderMoviePage(true);
        const dataCast = await requestMoviesCast(movieId);

        setMovieCast(dataCast.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaderMoviePage(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      <ul className={css.list}>
        {movieCast &&
          movieCast
            .filter((cast) => cast.profile_path !== null)
            .map((cast) => (
              <li key={cast.id} className={css.link}>
                <div className={css.wrapImage}>
                  <img
                    className={css.image}
                    src={`${urlImg}${cast.profile_path}`}
                    alt={cast.name}
                  />
                </div>
                <div className={css.description}>
                  <p>
                    <b>{cast.name}</b>
                  </p>
                  <p>{`Character: "${cast.character}"`}</p>
                </div>
              </li>
            ))}
      </ul>
      {isLoaderMoviePage && <Loader />}
    </>
  );
};

export default MovieCast;
