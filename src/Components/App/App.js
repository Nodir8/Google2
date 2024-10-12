import "./App.css";
import { Component } from "react";
import AppInfo from "../App-info/App-info";
import SearchPanel from "../Search-panel/Search-panel";
import AppFilter from "../App-filter/App-filter";
import MovieList from "../movielist/movie-list";
import MoviesAddForm from "../moveis-add-form/moveis-add-form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of Osman",
          viewer: 993,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewer: 674,
          favourite: false,
          like: true,
          id: 2,
        },
        {
          name: "Osman",
          viewer: 993,

          favourite: true,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState = ({ data }) => ({
      data: [...data, newItem],
    });
  };

  onToggleFavourite = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item.prop };
        }
        return item;
      }),
    }));
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };
  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => (c = c.like));
      case "mostviewers":
        return arr.filter((c) => (c = c.viewers > 600));
      default:
        return arr;
    }
  };

  updateTermHandler = (term) => this.setState({ term });
  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const { allMoviesCount } = data.length;
    const favouriteMovieSound = data.filter((c) => c.favourite).length;
    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );

    return (
      <div className="App font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMovieSound={favouriteMovieSound}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter
              filter={filter}
              updateFilterHandler={this.updateFilterHandler}
            />
          </div>
          <MovieList
            onToggleFavourite={this.onToggleFavourite}
            data={visibleData}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
