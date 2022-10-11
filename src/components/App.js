import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState('');
  const [data, setData] = useState('');

  const url = `http://www.omdbapi.com/?s=${movie}&apikey=b93b756`;

  const getMovie = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Movie Name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={getMovie}>Search</button>

      {data.Response === 'False' && <p>{data.Error}</p>}

      {data &&
        data.Search.map((movie, index) => (
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
}

export default App;
