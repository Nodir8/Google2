import "./movie-info.css";
import MovieListItem from "../movelist-item/movielist-item";

const MovieList = ({ data, onDelete, onToggleFavourite }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          viewer={item.viewer}
          like={item.like}
          favourite={item.favourite}
          onDelete={() => onDelete(item.id)}
          onToggleFavourite={(e) => onToggleFavourite(item.id, e)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
