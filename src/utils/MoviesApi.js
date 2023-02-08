class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _returnRes(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._returnRes)
  }

  getMovies() {
    return this._request(this._baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;

