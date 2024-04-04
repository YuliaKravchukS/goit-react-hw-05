const MovieReviews = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews.length !== 0 ? (
        movieReviews.map((review) => (
          <li key={review.id}>
            <p>
              `Author: <b>${review.author}</b>`
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
