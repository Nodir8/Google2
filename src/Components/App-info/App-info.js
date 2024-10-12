import "./App-info.css";
const AppInfo = ({ allMoviesCount, favouriteMovieSound }) => {
  return (
    <div className="app-info ">
      <p className="fs-3 text-uppercase">
        {" "}
        barcha kinolar soni {allMoviesCount}
      </p>
      <p className="fs-4 text-uppercase">
        {" "}
        ko'rilgan kinolar soni {favouriteMovieSound}
      </p>
    </div>
  );
};

export default AppInfo;
