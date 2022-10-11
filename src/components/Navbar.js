const Navbar = (props) => {
  // destructure hooks from props
  const { movie, setMovie } = props;

  return (
    <div className="Navbar">
      <input
        type="text"
        placeholder="Movie Name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
