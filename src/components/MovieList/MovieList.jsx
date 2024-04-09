import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { IoIosPeople } from "react-icons/io";
import { FaGrinStars } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import noPostrerUrl from "../../assets/noposter.png";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className={css.link}>
              <Link state={location} to={`/movies/${movie.id}`}>
                <div className={css.wrap}>
                  <img
                    src={
                      movie.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : `${noPostrerUrl}`
                    }
                    width="150"
                    alt={movie.title}
                    className={css.image}
                  />

                  {/* <div className={css.description}> */}
                  {/* <p>
                      <b>{movie.title}</b>
                    </p> */}
                  <div className={css.addInfo}>
                    <span aria-label="vote_average" title="vote_average">
                      <FaGrinStars className={css.icon} />
                      {movie.vote_average.toFixed(1)}
                    </span>

                    <span aria-label="release_date" title="release_date">
                      <BsCalendarDateFill className={css.icon} />
                      {movie.release_date}
                    </span>

                    <span aria-label="vote_count" title="vote_count">
                      <IoIosPeople className={css.icon} />
                      {movie.vote_count}
                    </span>
                  </div>
                  {/* </div> */}
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
