import css from "./MovieReviews.module.css";

const MovieReviews = ({ movieReviews }) => {
  return (
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
  );
};

export default MovieReviews;
