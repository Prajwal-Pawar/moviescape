const Search = (props) => {
  // destructure hooks from props
  const { searchMovie, setSearchMovie } = props;

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Movie Name"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
    </div>
  );
};

export default Search;
