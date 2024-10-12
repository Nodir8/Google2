import { Component } from "react";
import "./moveis-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      name: this.state.name,
      viewers: this.state.views,
    });
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movie-add-forms">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            onSubmit={this.addFormHandler}
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday Kino"
            onChange={this.changeHandler}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marotaba ko'rilgan"
            onChange={this.changeHandler}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

// const MoviesAddForm = () => {
//   return (
//     <div className="movie-add-forms">
//       <h3>Yangi kino qo'shish</h3>
//       <form className="add-form d-flex">
//         <input
//           type="text"
//           className="form-control new-post-label"
//           placeholder="Qanday Kino"
//         />
//         <input
//           type="number"
//           className="form-control new-post-label"
//           placeholder="Necha marotaba ko'rilgan"
//         />
//         <button type="submit" className="btn btn-outline-dark">
//           Qo'shish
//         </button>
//       </form>
//     </div>
//   );
// };

export default MoviesAddForm;
