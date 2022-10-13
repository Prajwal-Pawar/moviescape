import '../styles/search.css';

const Search = (props) => {
  // destructure hooks from props
  const { searchMovie, setSearchMovie } = props;

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search Movie Here ..."
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
    </div>
  );
};

export default Search;
