import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';

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

          setLoading(false);
        });
    };

    fetchMovie();
  }, [movieID]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Hello Movie : {movieID}</h1>
      <img src={movie.Poster} alt="" />
      <h1>Title: {movie.Title}</h1>
    </div>
  );
};

export default Movie;
