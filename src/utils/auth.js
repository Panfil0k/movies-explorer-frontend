class MoviesAuth {
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

  register(username, email, password) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': username,
        'email': email,
        'password': password
      })
    })
  }

  authorize(email, password) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
  }

  validationToken(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
}

const moviesAuth = new MoviesAuth({
  authorization: `Bearer ${localStorage.getItem('jwt')}`,
  baseUrl: 'https://api.panfilok.diploma.nomoredomains.club'
});

export default moviesAuth;
