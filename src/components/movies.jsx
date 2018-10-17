import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: []
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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
    this.setState({ currentPage: page });
    console.log("page", page);
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies
    } = this.state;

    if (movieCount === 0) return <p>There are no movies in the database.</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            allItems={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>

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
              {movies.map(m => (
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
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
