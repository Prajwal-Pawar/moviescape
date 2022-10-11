import { Routes, Route } from 'react-router-dom';
import Movie from './Movie';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:movieID" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
