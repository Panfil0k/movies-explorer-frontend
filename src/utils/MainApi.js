class MainApi {
  constructor({ baseUrl, imageUrl }) {
    this._baseUrl = baseUrl;
    this._imageUrl = imageUrl;
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

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    })
  }

  setUserInfo(dataUser) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: dataUser.name,
        email: dataUser.email
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    })
  }

  getMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    })
  }

  saveMovie(movie) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      body: JSON.stringify({
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailerLink: movie.trailerLink,
        image: `${this._imageUrl}${movie.image.url}`,
        thumbnail: `${this._imageUrl}${movie.image.formats.thumbnail.url}`,
      }),
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
    });
  }

  deleteMovie(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    })
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.panfilok.diploma.nomoredomains.club',
  imageUrl: 'https://api.nomoreparties.co'
});

export default mainApi;

