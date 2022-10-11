import Loader from './Loader';

const Movies = (props) => {
  // destructuring data from props
  const { data, loading } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Movies">
      {/* iterating over API call search results */}
      {data.Search.map((movie, index) => (
        <div key={`movie-${index}`}>
          <img src={movie.Poster} alt="" />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <p>{movie.Rated}</p>
          <p>{movie.Released}</p>
          <p>{movie.Runtime}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
