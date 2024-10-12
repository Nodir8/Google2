import "./App-filter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((btn) => {
        <button
          key={btn.name}
          className={`btn ${
            filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => updateFilterHandler(btn.name)}
          type="button"
        >
          {btn.label}
        </button>;
      })}

      {/* <button className="btn btn-outline-dark" type="button">
        Mashhur kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Ko'rilgan kinolar
      </button> */}
    </div>
  );
};

const btnArr = [
  { name: "all", label: "barcha kinolar" },
  { name: "popular", label: "mashhur kinolar" },
  { name: "mostViewers", label: "eng ko'p ko'rilgan kinolar" },
];
export default AppFilter;
