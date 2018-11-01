import { apiEndpoint } from "../config.json";
import http from "./httpService";

function movieUrl(movieId) {
  return `${apiEndpoint}/movies/${movieId}`;
}

export function getMovies() {
  return http.get(`${apiEndpoint}/movies`);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function deleteMovie(id) {
  http.delete(movieUrl(id));
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  console.log(movie);
  //movie._id = "new";
  return http.post(`${apiEndpoint}/movies`, movie);
}
