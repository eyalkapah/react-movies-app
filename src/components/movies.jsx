import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  handleDelete = movie => {
    console.log("Handle delete", movie);
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies]; // create a new array with same items
    const index = movies.indexOf(movie);
    movies[index] = { ...movie }; // clone item
    movies[index].liked = !movie.liked;

    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log("page", page);
    // const allMovies = [...getMovies()];
    // let movies = allMovies.slice(
    //   this.state.pageNumber * this.state.pageSize,
    //   Math.min(allMovies.length, page * this.state.pageSize + 4)
    // );

    // this.setState({ movies });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    if (movieCount === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {movieCount} movies in the database.</p>
        {/* table.table>thead>tr>th*4 */}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          {/* tbody>tr>td*4 */}
          <tbody>
            {this.state.movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like liked={m.liked} onClick={() => this.handleLike(m)} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(m)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={movieCount}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
export default Movies;
