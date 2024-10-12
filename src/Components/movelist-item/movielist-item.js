import "./movielist-item.css";

const MovieListItem = (props) => {
  const { name, viewer, onDelete, onToggleFavourite, onToggleLike, favourite } =
    props;

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite ? "favourite" : ""
      }`}
    >
      <span
        onClick={onToggleLike}
        className="list-group-item-label"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={viewer}
      />
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleFavourite}
          data-toggle="favourite"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-delete btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MovieListItem;
