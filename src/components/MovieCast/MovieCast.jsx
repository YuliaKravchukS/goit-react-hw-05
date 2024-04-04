const MovieCast = ({ movieCast, urlImg }) => {
  return (
    <ul>
      {movieCast &&
        movieCast.map((cast) => (
          <li key={cast.id}>
            <img src={`${urlImg}${cast.profile_path}`} alt={cast.name} />
            <p>{cast.name}</p>
            <p>{`Character:${cast.character}`}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
