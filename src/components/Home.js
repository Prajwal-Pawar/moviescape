import { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import Search from './Search';

const Home = () => {
  // hooks
  const [searchMovie, setSearchMovie] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API url
    const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=b93b756`;

    // getting movies from API
    const getMovies = async () => {
      setLoading(true);

      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);

          setLoading(false);
        });
    };

    getMovies();
  }, [searchMovie]);

  return (
    <div className="Home">
      <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} />

      {data.Response === 'True' ? (
        <MoviesList data={data} loading={loading} />
      ) : (
        <p>No Movies Found</p>
      )}
    </div>
  );
};

export default Home;
