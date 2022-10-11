import Loader from './Loader';
import { Link } from 'react-router-dom';
import '../styles/movielist.css';

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
            <div key={`movie-${index}`} className="movies-container">
              <img src={movie.Poster} id="poster" alt="" />
              <p id="movie-title">{movie.Title}</p>
              <p id="year">{movie.Year}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
