import Loader from './Loader';
import { Link } from 'react-router-dom';

const MoviesList = (props) => {
  // destructuring data from props
  const { data, loading } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="MoviesList">
      {/* iterating over API call search results */}
      {data &&
        data.Search.map((movie, index) => (
          <Link to={`/${movie.imdbID}`}>
            <div key={`movie-${index}`}>
              <img src={movie.Poster} alt="" />
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
              <p>{movie.Rated}</p>
              <p>{movie.Released}</p>
              <p>{movie.Runtime}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
