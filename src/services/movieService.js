import config from "../config.json";
import http from "./httpService";

export function getMovies() {
  return http.get(`${config.apiEndpoint}/movies`);
}

export function deleteMovie(id) {
  http.delete(`${config.apiEndpoint}/movies/${id}`);
}
