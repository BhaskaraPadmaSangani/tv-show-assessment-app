import axios from "axios";
const url = "http://api.tvmaze.com/";
export function getAllShows() {
  return axios.get(url + "shows");
}
export function getShowDetailsById(id) {
  return axios.get(url + `shows/${id}`);
}

export function getShowSeasonById(id) {
  return axios.get(url + `shows/${id}/seasons`);
}
export function getShowCastsById(id) {
  return axios.get(url + `shows/${id}/cast`);
}
export function searchShows(query) {
  return axios.get(url + `search/shows?q=${query}`);
}

