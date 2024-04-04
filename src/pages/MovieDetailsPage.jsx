import { Link, useParams } from "react-router-dom";

const urlImg = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams;
  return (
    <div>
      <Link to="/">Go back</Link>
      <div>
        {/* <img src={`${urlImg}${movieId.backdrop_path}`} alt="" /> */}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
