import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';

import PageLayout from '../PageLayout/PageLayout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';
import PublicRoute from '../PublicRoute';
import moviesAuth from '../../utils/MoviesAuth';
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'));
  const [profileFormIsReadOnly, setProfileFormIsReadOnly] = useState(true);
  const [preloader, setPreloader] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setformSuccess] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== 'profile') {
      setProfileFormIsReadOnly(true);
    }
  }, [location]);

  const auth = (jwt) => {
    return moviesAuth.validationToken(jwt).then((res) => {
      if (res) {
        setLoggedIn(true);
      }
    })
    .catch((err) => {
      signOut();
      console.log(`Ошибка: ${err}`);
    })
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth(jwt);
    } else {
      signOut();
    }
  }, [loggedIn]);

  const onRegister = ({ username, email, password }) => {
    return moviesAuth.register(username, email, password)
    .then((res) => {
      return res;
    })
    .then(() => {
      onLogin({ email, password })
    })
    .then(() => {
      navigate('/movies', {replace: true})
    })
    .catch((err) => {
      if (err === 409) {
        setFormError('Пользователь с таким email уже существует.');
        setTimeout(() => {setFormError('')}, 4000);
      } else {
        setFormError('При регистрации произошла ошибка.');
        setTimeout(() => {setFormError('')}, 4000);
      }
    })
  }

  const onLogin = ({ email, password }) => {
    return moviesAuth.authorize(email, password).then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('firstSearch', true);
        setLoggedIn(true);
      }
    })
    .then(() => {
      navigate('/movies', {replace: true});
    })
    .catch((err) => {
      if (err === 401) {
        setFormError('Вы ввели неправильный логин или пароль.');
        setTimeout(() => {setFormError('')}, 4000);
      } else {
        setFormError('При авторизации произошла ошибка.');
        setTimeout(() => {setFormError('')}, 4000);
      }
    })
  }

  function signOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    navigate('/', {replace: true});
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })

      mainApi.getMovies()
      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem('savedMovies', JSON.stringify(res));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    }
  }, [loggedIn])

  function handleEditUserInfo() {
    setProfileFormIsReadOnly(!profileFormIsReadOnly);
  }

  function handleUpdateUser(e) {
    mainApi.setUserInfo(e)
    .then((res) => {
      setCurrentUser(res);
      setProfileFormIsReadOnly(!profileFormIsReadOnly);
      setformSuccess(true);
      setTimeout(() => {setformSuccess(false)}, 4000);
    })
    .catch((err) => {
      if (err === 409) {
        setFormError('Пользователь с таким email уже существует.');
        setTimeout(() => {setFormError('')}, 4000);
      } else {
        setFormError('При обновлении профиля произошла ошибка.');
        setTimeout(() => {setFormError('')}, 4000);
      }
    })
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
    .then((newMovie) => {
      const updateSavedMovies = [newMovie, ...JSON.parse(localStorage.getItem('savedMovies'))];
      setSavedMovies(updateSavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(updateSavedMovies));
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId)
    .then(() => {
      const updateSavedMovies = JSON.parse(localStorage.getItem('savedMovies')).filter(item => item._id !== movieId);
      setSavedMovies(updateSavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(updateSavedMovies));
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route element={<PageLayout loggedIn={loggedIn} />}>
            <Route path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                    preloader={preloader}
                    setPreloader={setPreloader}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    onDelete={handleDeleteMovie}
                    preloader={preloader}
                    setPreloader={setPreloader}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    isReadOnly={profileFormIsReadOnly}
                    profileSuccess={formSuccess}
                    profileError={formError}
                    handleEdit={handleEditUserInfo}
                    onUpdateUser={handleUpdateUser}
                    signOut={signOut}
                  />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path='/signin'
            element={
              <PublicRoute loggedIn={loggedIn}>
                <Login onLogin={onLogin} loginError={formError} />
              </PublicRoute>
            }
          />
          <Route
            path='/signup'
            element={
              <PublicRoute loggedIn={loggedIn}>
                <Register onRegister={onRegister} registerError={formError} />
              </PublicRoute>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
