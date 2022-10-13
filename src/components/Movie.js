import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import '../styles/movie.css';

const Movie = () => {
  // hooks
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);

  // getting movie ID from url params
  const { movieID } = useParams();

  useEffect(() => {
    // API url
    const url = `http://www.omdbapi.com/?i=${movieID}&apikey=b93b756`;

    // getting movies information from API by movie id
    const fetchMovie = async () => {
      setLoading(true);

      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
          console.log(data);

          setLoading(false);
        });
    };

    fetchMovie();
  }, [movieID]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Movie">
      <h1 id="title">{movie.Title}</h1>
      <div className="container">
        <div className="poster-wrapper">
          <img src={movie.Poster} alt="" id="poster" />
        </div>
        <div className="info-wrapper">
          <p id="plot">{movie.Plot}</p>
          <p>
            <span className="label">Year : </span>
            {movie.Year}
          </p>
          <p>
            <span className="label">Rated : </span>
            {movie.Rated}
          </p>
          <p>
            <span className="label">Released : </span>
            {movie.Released}
          </p>
          <p>
            {movie.Runtime === 'N/A' ? null : (
              <>
                <span className="label">Runtime : </span>
                {movie.Runtime}{' '}
              </>
            )}
          </p>
          <p>
            <span className="label">Type : </span>
            {movie.Type}
          </p>
          <p>
            <span className="label">Actors : </span>
            {movie.Actors}
          </p>
          <p>
            {movie.Director === 'N/A' ? null : (
              <>
                <span className="label">Director : </span> {movie.Director}
              </>
            )}
          </p>
          <p>
            {movie.Writer === 'N/A' ? null : (
              <>
                <span className="label">Writer : </span> {movie.Writer}
              </>
            )}
          </p>
          <p>
            <span className="label">Genre : </span>
            {movie.Genre}
          </p>
          {/* <p>
            <span className="label">Plot : </span>
            {movie.Plot}
          </p> */}
          <p>
            {movie.Metascore === 'N/A' ? null : (
              <>
                <span className="label">Metascore : </span>
                {movie.Metascore}
              </>
            )}
          </p>
          <p>
            <span className="label">IMDB Rating : </span>
            {movie.imdbRating} / 10
          </p>
          <p>
            <span className="label">IMDB Votes : </span>
            {movie.imdbVotes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
