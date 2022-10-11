import { useEffect, useState } from 'react';
import Movies from './Movies';
import Navbar from './Navbar';

function App() {
  // hooks
  const [movie, setMovie] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API url
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=b93b756`;

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
  }, [movie]);

  return (
    <div className="App">
      <Navbar movie={movie} setMovie={setMovie} />

      {data.Response === 'True' ? (
        <Movies data={data} loading={loading} />
      ) : (
        <p>No Movies Found</p>
      )}
    </div>
  );
}

export default App;
