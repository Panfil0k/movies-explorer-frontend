export default function filterMovies(array, query, checkbox) {
  if (!checkbox) {
    return array.filter((movie) => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) > -1)
  }
  return array.filter((movie) => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) > -1).filter((movie) => movie.duration <= 40);
}
